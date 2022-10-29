import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useToast } from "@chakra-ui/react";

const SignupModal = ({ props }) => {
  const [loginSignup, setLoginSignup] = useState("signup");
  const { isOpen, onOpen, onClose } = props;
  const form_data = useRef({});
  const toast = useToast();
  const toastIdRef = useRef(null);

  const handle_login_signup = () => {
    if (loginSignup === "signup") {
      setLoginSignup("login");
    } else setLoginSignup("signup");
  };

  const handle_submit = async (e) => {
    e.preventDefault();
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    const form = await e.target.elements;

    for (let i = 0; i < form.length - 1; i++) {
      const name = form[i].name;
      const value = form[i].value;
      form_data.current[name] = value;
      form[i].value = "";
    }

    // console.log(form_data.current)

    if (
      loginSignup === "signup" &&
      form_data.current["confirm_pass"] !== form_data.current["password"]
    ) {
      toastIdRef.current = toast({
        position: "bottom",
        title: "Passwords Mismatching",
        description: "both password mismatching",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (
      loginSignup === "signup" &&
      form_data.current["confirm_pass"] === form_data.current["password"]
    ) {
      delete form_data.current["confirm_pass"];

      fetch("http://localhost:5000/max-fashion/signup", {
        method: "POST",
        body: JSON.stringify(form_data.current),
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then(async (data) => {
          const { message, error } = await data;
          if (!error) {
            setLoginSignup("login");
            toastIdRef.current = toast({
              position: "bottom",
              title: "Sign-up Successful",
              description: "Your Account has been created",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else if (error) {
            toastIdRef.current = toast({
              position: "bottom",
              title: message,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        });
    } else if (loginSignup === "login") {
      fetch("http://localhost:5000/max-fashion/login", {
        method: "POST",
        body: JSON.stringify(form_data.current),
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then(async(data) => {
            const { message, error } = await data;
          if (!error) {
            toastIdRef.current = toast({
              position: "bottom",
              title: "Login Successful",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else if (error) {
            toastIdRef.current = toast({
              position: "bottom",
              title: message,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          {loginSignup === "login" ? "Login" : "Sign-up"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody style={{ textAlign: "center" }}>
          <form onSubmit={handle_submit}>
            {loginSignup === "signup" ? (
              <>
                <Input
                  required
                  type="text"
                  name="user_name"
                  placeholder="Please Enter a Username"
                />
                <br />
                <br />
              </>
            ) : (
              ""
            )}
            <Input
              style={{ border: "1px solid #ecedeb" }}
              type="text"
              name="email"
              placeholder="Please Enter your Email"
              required
            />
            <br />
            <br />
            <Input
              required
              type="password"
              name="password"
              placeholder="Please Enter a password"
            />
            <br />
            <br />
            {loginSignup === "signup" ? (
              <>
                <Input
                  required
                  type="password"
                  name="confirm_pass"
                  placeholder="Please confirm your passwerd"
                />
                <br />
                <br />
              </>
            ) : (
              ""
            )}
            <Input
              type="submit"
              style={{
                width: "160px",
                backgroundColor: "#303ab2",
                color: "white",
                cursor: "pointer",
              }}
              value={loginSignup === "login" ? "Login" : "Sign-up"}
            />
          </form>
          <br />
          <br />
          <p>
            {loginSignup === "login" ? "New User?" : "Already registered?"}{" "}
            <span
              onClick={handle_login_signup}
              style={{
                textDecoration: "underline",
                display: "inline-flex",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            >
              {loginSignup === "signup" ? "Login here" : "Sign-up here"}
            </span>
          </p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignupModal;