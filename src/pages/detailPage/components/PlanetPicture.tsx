import React from "react";
import styled from "styled-components";

export const PlanetPicture: React.FunctionComponent<{
  date?: string;
  name_s?: string;
  name?: string;
}> = ({ date, name_s, name }) => {
  return (
    <>
      <DateText>{date}</DateText>
      <PlanetImageBox>
        <img
          src={`/assets/images/move_buttons/${name_s}.webp`}
          style={{ objectFit: "cover" }}
        />
      </PlanetImageBox>
      <ScreenImageBox>
        <img
          src={`/assets/images/web_main/${name_s}.webp`}
          style={{
            width: "88%",
            height: "82%",
            opacity: 0.88,
            borderRadius: "1vh",
          }}
        />
      </ScreenImageBox>
      <NameTagBox>{name}</NameTagBox>
    </>
  );
};

const NameTagBox = styled.div`
  display: flex;
  position: absolute;
  background-image: url("/assets/images/wide_book/wide_name_tag.webp");
  height: 15%;
  aspect-ratio: 3.365;
  background-size: cover;
  align-items: center;
  justify-content: center;
  color: #000000d8;
  top: 50%;
  left: 50%;
  transform: translate(-113%, -265%) rotate(-8deg);
  font-size: 2.2vh;
`;
const PlanetImageBox = styled.div`
  display: flex;
  position: absolute;
  height: 28%;
  aspect-ratio: 1;
  top: 32vh;
  left: 50%;
  transform: translate(calc(-50% - 36vh), -50%) rotate(-1deg);
`;
const ScreenImageBox = styled.div`
  display: flex;
  position: absolute;
  height: 15%;
  top: 50%;
  left: 50%;
  transform: translate(-122%, -100%) rotate(-20deg);
  background-image: url("/assets/images/wide_book/wide_screen_sticker.webp");
  background-size: cover;
  aspect-ratio: 1.894;
  align-items: center;
  justify-content: center;
`;
const DateText = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 1.7%;
  aspect-ratio: 13.08;
  transform: translate(-124%, 310%);
  color: #c9c8bb;
  font-size: 1.6vh;
`;
