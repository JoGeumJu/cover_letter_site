import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { LoadingRouteButton } from "../../common/LoadingRouteButton";
import { isLoadingState } from "../../recoil/loadingAtom";

const DetailPage: React.FunctionComponent = () => {
  const setIsLoading = useSetRecoilState(isLoadingState);
  const navigate = useNavigate();

  return (
    <DetailWrapper className={"page"} id={"detail"}>
      디테일 페이지
      <DetailWrapperInner>
        <ButtonWrapper>
          <LoadingRouteButton path="/">메인페이지로</LoadingRouteButton>
        </ButtonWrapper>
      </DetailWrapperInner>
    </DetailWrapper>
  );
};
export default DetailPage;

const DetailWrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;
const DetailWrapperInner = styled.section`
  display: flex;
  width: 100%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  background: white;
  color: black;
`;
