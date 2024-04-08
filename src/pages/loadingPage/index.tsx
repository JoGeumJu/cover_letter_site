import { styled } from "styled-components";

const LoadingPage: React.FunctionComponent = () => {
  return (
    <LoadingWrapper className={"page"} id={"loading"}>
      <LoadingWrapperInner>
        <LoadingSpinner src={"/assets/gifs/book.webp"} alt={"rocket"} />
      </LoadingWrapperInner>
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
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const LoadingSpinner = styled.img`
  width: 25%;
  min-width: 200px;
  margin-bottom: 10%;
`;
