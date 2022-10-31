import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const usePrivateRoute = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const user = useSelector((store) => store.AppReducer.user);

  const private_route = (onOpen, nav_to) => {
    if (!user.token) {
      toast({
        position: "bottom",
        title: "Please Login first",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      onOpen();
    } else {
      if (window.location.href.indexOf(nav_to) !== -1) return;
      navigate(nav_to);
    }
  };

  return { private_route };
};

export default usePrivateRoute;
