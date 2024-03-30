import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { LoadingRouteButton } from "../../common/LoadingRouteButton";
import { isLoadingState } from "../../recoil/globalState";
import { WideBook } from "./wide/wide_book";

const DetailPage: React.FunctionComponent = () => {
  const setIsLoading = useSetRecoilState(isLoadingState);
  const navigate = useNavigate();

  return (
    <DetailWrapper className={"page"} id={"detail"}>
      <WideBook />
    </DetailWrapper>
  );
};
export default DetailPage;

const DetailWrapper = styled.main`
  width: 100%;
  height: 100%;
  background: #09010d;
`;
const DetailWrapperInner = styled.section`
  display: flex;
  width: 100%;
`;
