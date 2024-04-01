import React from "react";
import styled from "styled-components";

export const Release: React.FunctionComponent<{
  hasReleased?: boolean;
  link?: string;
}> = ({ hasReleased, link }) => {
  return (
    <>
      <SectionTitle_L>프로젝트 배포</SectionTitle_L>
      <LinkButton
        type="button"
        onClick={() => {
          if (hasReleased) window.open(link, "_blank");
        }}
      >
        {hasReleased ? (
          <>
            <img
              src={"/assets/images/wide_book/release.webp"}
              style={{
                objectFit: "cover",
                height: "100%",
                paddingBottom: "1vh",
                opacity: 0.7,
                transform: "scale(0.75)",
              }}
              alt={"released"}
            />
            {"절찬 배포 중! (클릭하여 접속)"}
          </>
        ) : (
          <img
            src={"/assets/images/wide_book/none_release.webp"}
            style={{
              objectFit: "cover",
              height: "100%",
              opacity: 0.8,
              transform: "scale(1.1)",
            }}
            alt={"unReleased"}
          />
        )}
      </LinkButton>
    </>
  );
};

const SectionTitle_L = styled.div`
  display: flex;
  position: absolute;
  height: 11%;
  aspect-ratio: 2.754;
  top: 50%;
  left: 50%;
  transform: translate(-116%, 180%) rotate(2deg);
  background-image: url("/assets/images/wide_book/wide_sticker_2.webp");
  background-size: cover;
  align-items: center;
  justify-content: center;
  font-size: 2vh;
`;
const LinkButton = styled.button`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 5%;
  aspect-ratio: 8;
  transform: translate(-124%, 550%);
  color: #63635cdf;
  font-size: 1.65vh;
  line-height: 2.5vh;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: underline;
  }
`;
