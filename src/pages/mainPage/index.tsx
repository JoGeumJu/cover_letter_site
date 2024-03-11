import { styled } from "styled-components";
import MainCanvas from "./Canvas";

const MainPage: React.FunctionComponent = () => {
  return (
    <MainWrapper>
      <MainWrapperInner>
        <FloatingCanvas>
          <MainCanvas />
        </FloatingCanvas>
      </MainWrapperInner>
    </MainWrapper>
  );
};
export default MainPage;

const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
`;
const MainWrapperInner = styled.section`
  display: flex;
  width: 100%;
  height: 3000px;
`;

const FloatingCanvas = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
