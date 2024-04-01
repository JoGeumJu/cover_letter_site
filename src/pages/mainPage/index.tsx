import { styled } from "styled-components";
import MainCanvas from "./common/Canvas";
import { TextBubble } from "./components/TextBubble";

const MainPage: React.FunctionComponent = () => {
  return (
    <MainWrapper className={"page"} id={"main"}>
      <MainWrapperInner>
        <FloatingCanvas>
          <MainCanvas />
        </FloatingCanvas>
        <TextBubble />
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
  height: 100%;
`;

const FloatingCanvas = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;
