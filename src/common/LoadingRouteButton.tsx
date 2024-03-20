import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { isLoadingState } from "../recoil/loadingAtom";

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
      }, 2000);
    } else {
      if (props.elFunc) {
        props.elFunc();
      }
    }
  };

  return (
    <Button type="button" onClick={handleClick}>
      {props.children}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
`;
