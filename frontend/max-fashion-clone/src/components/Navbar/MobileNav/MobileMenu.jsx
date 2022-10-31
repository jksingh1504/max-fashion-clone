import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import MobileDrawer from "./MobileDrawer";

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        style={{
          fontSize: "30px",
        }}
        className="material-icons"
      >
        menu
      </span>
      <MobileDrawer OnClose={onClose} IsOpen={isOpen} />
    </>
  );
};

export default MobileMenu;
