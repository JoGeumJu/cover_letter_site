import React, { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const BookmarksData: Array<{ name: string }> = [
  { name: "cu" },
  { name: "cal" },
  { name: "st" },
  { name: "dos" },
  { name: "meong" },
];

export const Bookmarks: React.FunctionComponent<{
  contentKey: string | undefined;
}> = ({ contentKey }) => {
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    BookmarksData.map((i, id) => {
      if (i.name === contentKey) setIndex(id);
    });
  }, [contentKey]);

  return (
    <>
      {BookmarksData.map((i, id) => (
        <Wrapper
          key={id + i.name}
          type="button"
          $index={id}
          $selectedIndex={index}
          onClick={() => {
            navigate(`/detail`, { replace: true, state: { content: i.name } });
          }}
        >
          <BookmarkBox>
            <BookmarkImg
              src={"/assets/images/wide_book/bookmark.webp"}
              $passed={id <= index}
            />
            <BookmarkText>{i.name}</BookmarkText>
          </BookmarkBox>
        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = styled.button<{
  $index: number;
  $selectedIndex: number;
}>`
  display: flex;
  position: fixed;
  height: 6vh;
  aspect-ratio: 1.2416;
  top: 0;
  ${(props) =>
    props.$index <= props.$selectedIndex
      ? css`
          right: 50%;
          transform: translate(-55.9vh, ${20 + props.$index * 7}vh);
        `
      : css`
          left: 50%;
          transform: translate(51.9vh, ${20 + props.$index * 7}vh);
        `};
  filter: ${(props) =>
    props.$selectedIndex === props.$index ? "hue-rotate(90deg) " : null};
  &:hover {
    aspect-ratio: 1.4;
    transition: all 0.2s ease;
  }
`;
const BookmarkBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
const BookmarkImg = styled.img<{ $passed: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    rotate(${(props) => (props.$passed ? 0 : "180deg")});
`;
const BookmarkText = styled.div`
  position: absolute;
  color: #8f3939;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.6vh;
  letter-spacing: -0.06vh;
  text-transform: uppercase;
  font-weight: bold;
`;
