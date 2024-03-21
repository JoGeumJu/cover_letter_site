import { styled } from "styled-components";

const LoadingPage: React.FunctionComponent = () => {
  return (
    <LoadingWrapper className={"page"} id={"loading"}>
      <LoadingWrapperInner>로딩중</LoadingWrapperInner>
    </LoadingWrapper>
  );
};
export default LoadingPage;

const LoadingWrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: #fef6e1;
`;
const LoadingWrapperInner = styled.section`
  display: flex;
  width: 100%;
  height: 3000px;
`;
