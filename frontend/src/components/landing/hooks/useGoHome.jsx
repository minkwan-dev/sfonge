import { useNavigate } from "react-router-dom";

export const useGoHome = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return goHome;
};
