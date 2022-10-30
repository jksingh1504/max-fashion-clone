import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import "../../../stylesheets/navbar/mobileDrawer.css";
import "../../../stylesheets/Utilities/flex.css";
import SignupModal from "../SignupModal/SignupModal";
import { useSelector } from "react-redux";

const MobileDrawer = ({ OnClose, IsOpen }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user=useSelector(store=>store.AppReducer.user)

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
          {user.user_name?`Welcome! ${user.user_name}`:"Welcome to MAX-Fashion"}
        </DrawerHeader>
        <DrawerBody className="mobile_drawer">
          <p>
            Women
            <span className="material-icons">chevron_right</span>
          </p>
          <p>
            Men
            <span className="material-icons">chevron_right</span>
          </p>
          <p>
            Girls
            <span className="material-icons">chevron_right</span>
          </p>
          <p>
            Boys
            <span className="material-icons">chevron_right</span>
          </p>
          <br />
          <button onClick={onOpen}>{user.token?"Log-Out":"Sign-up/Login"}</button>
          <SignupModal props={{ isOpen, onOpen, onClose}} />
          <br />
          <br />
          <p>
            <flex style={{ gap: "16px" }}>
              <span style={{ color: "black" }} className="material-icons">
                favorite_border
              </span>
              Wishlist
            </flex>
            <span className="material-icons">chevron_right</span>
          </p>
          <p>
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
