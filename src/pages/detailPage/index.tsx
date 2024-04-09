import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { LoadingRouteButton } from "../../common/LoadingRouteButton";
import {
  ContentKeyType,
  ContentType,
  DetailPageData,
} from "../../data/detail_page_data";
import { isLoadingState } from "../../recoil/globalState";
import { Bookmarks } from "./components/Bookmarks";
import { Explain } from "./components/Explain";
import { PlanetPicture } from "./components/PlanetPicture";
import { Release } from "./components/Release";
import { Stack_Performance } from "./components/Stack_Performance";

const DetailPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const setIsLoading = useSetRecoilState(isLoadingState);
  const location = useLocation();
  const [contentKey, setContentKey] = useState("");
  const [content, setContent] = useState<ContentType>();

  useEffect(() => {
    const getContentKey = location.state["content"];
    setContentKey(getContentKey);
    if (getContentKey) setContent(DetailPageData(getContentKey));
  }, []);

  return (
    <DetailWrapper className={"page"} id={"detail"}>
      <DetailWrapperInner>
        <Book
          src={"/assets/images/wide_book/book_detail_wide.webp"}
          alt={"book"}
        />
        <PlanetPicture
          date={content?.date}
          name_s={content?.name_s}
          name={content?.name}
        />
        <Explain explain={content?.explain} />
        <Release hasReleased={content?.hasReleased} link={content?.link} />
        <Stack_Performance
          stack={content?.stack}
          performance={content?.performance}
        />
      </DetailWrapperInner>
      <Bookmarks contentKey={contentKey} />
      <Back>
        <LoadingRouteButton path={"/"}>
          <img
            src={"/assets/images/wide_book/back_sticker.webp"}
            alt={"back"}
            style={{ width: "100%", height: "100%" }}
          />
        </LoadingRouteButton>
      </Back>
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
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  overflow: hidden;
  color: #63635cdf;
`;
const Book = styled.img`
  display: flex;
  position: absolute;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Back = styled.div`
  display: flex;
  position: absolute;
  top: 5vh;
  left: 5vh;
  height: 6%;
  aspect-ratio: 1.163;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.15);
  }
`;
