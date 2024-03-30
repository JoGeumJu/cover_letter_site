import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";

export const WideBook: React.FunctionComponent = () => {
  let released = true;
  let libraries = [
    "React",
    "styled-components",
    "styled-components",
    "recoil",
    "React",
  ];
  return (
    <Wrapper className={"page"} id={"detail"}>
      <>
        <Book src={"/assets/images/wide_book/book_detail_wide.png"} />
        <PlanetImageBox>
          <img src={"/assets/images/move_buttons/cu.png"} />
        </PlanetImageBox>
        <NameTagBox>cover-letter-site 제목</NameTagBox>
        <DateText>2024.03.30 ~ 2024.04.02</DateText>
      </>
      <>
        <SectionTitle_S $position={[-190, 60]} $rotation={-6}>
          간단 설명
        </SectionTitle_S>
        <ExplainText1>
          {"조금주의 자기소개 및 포폴을 위한 사이트\n뭐라고 쏼라쏼라"}
        </ExplainText1>
      </>
      <>
        <SectionTitle_L $position={[-66, 230]} $rotation={2}>
          프로젝트 배포
        </SectionTitle_L>
        <LinkButton>
          {released ? (
            <>
              <img
                src={"/assets/images/book_stickers/release.png"}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  paddingBottom: "0.6vh",
                  opacity: 0.8,
                  transform: "scale(0.8)",
                }}
              />
              {"절찬 배포 중! (클릭하여 접속)"}
            </>
          ) : (
            <img
              src={"/assets/images/book_stickers/none_release.png"}
              style={{
                objectFit: "cover",
                height: "100%",
                opacity: 0.8,
                transform: "scale(1.1)",
              }}
            />
          )}
        </LinkButton>
      </>
      <>
        <ExplainText2>
          {libraries.map((i, id) => (
            <ExplainText2Item key={i + id}>✦ {i}</ExplainText2Item>
          ))}
        </ExplainText2>
        <SectionTitle_L $position={[120, -340]} $rotation={5}>
          기술스택 및 라이브러리
        </SectionTitle_L>
      </>
      <>
        <ExplainText3>
          {
            "팀장 맡음.. ㅠㅠ 어려웠다고 함..\n어쩌고 저쩌고 페이지 퍼블리싱 및 기능 구현\n기능구현의 구체화 중요도를 배움"
          }
        </ExplainText3>
        <SectionTitle_L $position={[47, -60]} $rotation={-2}>
          맡은 역할 및 성과
        </SectionTitle_L>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  overflow: hidden;
  color: #63635c;
`;
const NameTagBox = styled.div`
  display: flex;
  position: absolute;
  background-image: url("/assets/images/wide_book/wide_name_tag.png");
  height: 15%;
  aspect-ratio: 3.365;
  background-size: cover;
  align-items: center;
  justify-content: center;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-113%, -280%) rotate(-8deg);
  font-size: 2.2vh;
`;
const Book = styled.img`
  display: flex;
  position: absolute;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PlanetImageBox = styled.div`
  display: flex;
  position: absolute;
  height: 35%;
  aspect-ratio: 1;
  top: 50%;
  left: 50%;
  transform: translate(-120%, -107%) rotate(-1deg);
`;
const DateText = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 1.7%;
  aspect-ratio: 13.08;
  transform: translate(-140%, 300%);
  color: #c9c8bb;
  font-size: 1.65vh;
`;
const SectionTitle_S = styled.div<{ $position: number[]; $rotation: number }>`
  display: flex;
  position: absolute;
  height: 11%;
  aspect-ratio: 2.103;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    `translate(${-50 + props.$position[0]}%, ${
      -50 + props.$position[1]
    }%) rotate(${props.$rotation}deg)`};
  background-image: url("/assets/images/wide_book/wide_sticker_1.png");
  background-size: cover;
  align-items: center;
  justify-content: center;
  font-size: 2.1vh;
`;
const SectionTitle_L = styled.div<{ $position: number[]; $rotation: number }>`
  display: flex;
  position: absolute;
  height: 11%;
  aspect-ratio: 2.754;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    `translate(${-50 + props.$position[0]}%, ${
      -50 + props.$position[1]
    }%) rotate(${props.$rotation}deg)`};
  background-image: url("/assets/images/wide_book/wide_sticker_2.png");
  background-size: cover;
  align-items: center;
  justify-content: center;
  font-size: 2vh;
`;
const ExplainText1 = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 14.5%;
  aspect-ratio: 2.65;
  transform: translate(-126%, 70%);
  color: #63635c;
  font-size: 1.9vh;
  white-space: pre;
  line-height: 2.5vh;
`;
const ExplainText2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 14.8vh;
  left: 50%;
  width: 41vh;
  max-height: 26%;
  transform: translate(11%, 0);
  color: #63635c;
  font-size: 1.65vh;
  letter-spacing: -0.06vh;
  white-space: pre;
  line-height: 2.5vh;
  gap: 0.6vh 0;
`;
const ExplainText2Item = styled.div`
  display: flex;
  width: 50%;
  padding-right: 1vh;
  box-sizing: border-box;
  height: fit-content;
`;
const ExplainText3 = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 35%;
  aspect-ratio: 1.15;
  transform: translate(10%, -10%);
  color: #63635c;
  font-size: 1.8vh;
  white-space: pre;
  line-height: 2.5vh;
`;
const LinkButton = styled.button`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 5%;
  aspect-ratio: 8;
  transform: translate(-124%, 550%);
  color: #63635c;
  font-size: 1.65vh;
  line-height: 2.5vh;
  align-items: center;
  justify-content: center;
  gap: 0.4vh;
  &:hover {
    text-decoration: underline;
  }
`;
