import React, { useRef } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import "../../stylesheets/cartPage/offerModal.css";

const OfferModal = ({ props }) => {
  const { isOpen, onClose, setOfferDiscount, total } = props;
  const toastIdRef = useRef(null);
  const toast = useToast();

  const handle_offers = (discount) => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if ((discount === 5) & (total >= 499)) {
      setOfferDiscount(Math.ceil(total * 0.05));
      toastIdRef.current = toast({
        position: "bottom",
        title: "Offer has been claimed",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    } else if ((discount === 10) & (total >= 799)) {
      setOfferDiscount(Math.ceil(total * 0.1));
      toastIdRef.current = toast({
        position: "bottom",
        title: "Offer has been claimed",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    } else {
      toastIdRef.current = toast({
        position: "bottom",
        title: "Offer not applicable on your purchase",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader style={{ textAlign: "center" }}>
          Collect Your Offers
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="offer_modal">
            <div onClick={(e) => handle_offers(5)}>
              <img
                loading="lazy"
                src="https://www.maxfashion.in/static/icons/gift-box.png"
                alt=""
              />
              <div>
                <b>MAX5</b>
                <p>get extra 5% discount on order above 499</p>
              </div>
            </div>
            <div onClick={(e) => handle_offers(10)}>
              <img
                loading="lazy"
                src="https://www.maxfashion.in/static/icons/gift-box.png"
                alt=""
              />
              <div>
                <b>MAX10</b>
                <p>get extra 10% discount on order above 799</p>
              </div>
            </div>
            <br />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OfferModal;
