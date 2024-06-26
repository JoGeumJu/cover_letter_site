import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { isLoadingState } from "../recoil/globalState";

interface ButtonProps {
  path: string;
  children: ReactNode;
  ifFunc?: () => void;
  elFunc?: () => void;
  condition?: boolean;
}

export const LoadingRouteButton: React.FunctionComponent<ButtonProps> = (
  props
) => {
  const navigate = useNavigate();
  const setIsLoading = useSetRecoilState(isLoadingState);

  const handleClick = () => {
    if (props.condition ? props.condition : true) {
      if (props.ifFunc) {
        props.ifFunc();
      }
      setIsLoading(true);
      navigate(props.path);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } else {
      if (props.elFunc) {
        props.elFunc();
      }
    }
  };

  return (
    <Button type="button" onClick={handleClick} name={"loading_route_button"}>
      {props.children}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
`;
