import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { ContentType, DetailPageData } from "../../data/detail_page_data";
import { isLoadingState } from "../../recoil/globalState";
import { Explain } from "./components/Explain";
import { PlanetPicture } from "./components/PlanetPicture";
import { Release } from "./components/Release";
import { Stack_Performance } from "./components/Stack_Performance";

const DetailPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const setIsLoading = useSetRecoilState(isLoadingState);
  const location = useLocation();
  const [content, setContent] = useState<ContentType>();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const contentKey = searchParams.get("content");
    if (contentKey) setContent(DetailPageData(contentKey));
  }, []);

  return (
    <DetailWrapper className={"page"} id={"detail"}>
      <DetailWrapperInner>
        <Book src={"/assets/images/wide_book/book_detail_wide.png"} />
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
