import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import "../../../stylesheets/navbar/mobileDrawer.css";
import "../../../stylesheets/Utilities/flex.css";
import SignupModal from "../SignupModal/SignupModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MobileDrawer = ({ OnClose, IsOpen }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((store) => store.AppReducer.user);
  const navigate = useNavigate();
  const toast = useToast();

  const handle_authorization = (nav_to) => {
    if (user.token) {
      navigate(nav_to);
      OnClose();
    } else {
      toast({
        position: "bottom",
        title: "Please Login first",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      onOpen();
    }
  };

  return (
    <Drawer
      style={{ width: "90vw" }}
      placement="left"
      onClose={OnClose}
      isOpen={IsOpen}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton className="close_button" />
        <DrawerHeader borderBottomWidth="1px">
          {user.user_name
            ? `Welcome! ${user.user_name}`
            : "Welcome to MAX-Fashion"}
        </DrawerHeader>
        <DrawerBody className="mobile_drawer">
          <p
            onClick={() => {
              navigate("/?page=women");
              OnClose();
            }}
          >
            Women
            <span className="material-icons">chevron_right</span>
          </p>
          <p
            onClick={() => {
              navigate("/?page=men");
              OnClose();
            }}
          >
            Men
            <span className="material-icons">chevron_right</span>
          </p>
          <p
            onClick={() => {
              navigate("/?page=girls");
              OnClose();
            }}
          >
            Girls
            <span className="material-icons">chevron_right</span>
          </p>
          <p
            onClick={() => {
              navigate("/?page=boys");
              OnClose();
            }}
          >
            Boys
            <span className="material-icons">chevron_right</span>
          </p>
          <br />
          <button onClick={onOpen}>
            {user.token ? "Log-Out" : "Sign-up/Login"}
          </button>
          <SignupModal props={{ isOpen, onOpen, onClose }} />
          <br />
          <br />
          <p onClick={() => handle_authorization("/wishlist")}>
            <flex style={{ gap: "16px" }}>
              <span style={{ color: "black" }} className="material-icons">
                favorite_border
              </span>
              Wishlist
            </flex>
            <span className="material-icons">chevron_right</span>
          </p>
          <p onClick={() => handle_authorization("/cart")}>
            <flex style={{ gap: "16px" }}>
              <span style={{ color: "black" }} className="material-icons">
                shopping_bag
              </span>
              Basket
            </flex>
            <span className="material-icons">chevron_right</span>
          </p>
          <br />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
