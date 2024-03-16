export enum LabelType {
  intro,
  cu,
  calculator,
  streetStore,
  dos,
  meonghae,
  git,
}

interface LabelText {
  label: LabelType;
  items: Array<{ text: String; speed: number }>;
}

export const TalkingText = (label: LabelType) => {
  switch (label) {
    case LabelType.intro:
      return [
        { text: "말풍선을 클릭해봐! 멍!", speed: 50 },
        { text: "안녕! 나와 함께 탐험할 준비 됐어? 멍?", speed: 50 },
        { text: "아래로 스크롤해서 출발할 수 있어! 멍!", speed: 50 },
      ];
    case LabelType.cu:
      return [
        { text: "이건..! CU 클론 코딩 프로젝트야! 멍!", speed: 50 },
        {
          text: "도감에 보니 리액트를 공부하기 위해 만들었다고 전해지고 있어.. \n열정이 엄청난걸..!",
          speed: 50,
        },
        {
          text: "이 프로젝트 SwiperJS와 웹 반응형에 신경을 쓴 흔적이 보여!",
          speed: 50,
        },
        {
          text: "실제 웹 페이지를 보고 싶다면, 더보기 버튼을 눌러봐!",
          speed: 50,
        },
        { text: '더보기 버튼은 "..."모양의 버튼이야', speed: 50 },
      ];
    case LabelType.calculator:
      return [
        { text: "뭘봐", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
      ];
    case LabelType.streetStore:
      return [
        { text: "뭘봐", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
      ];
    case LabelType.dos:
      return [
        { text: "뭘봐", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
      ];
    case LabelType.meonghae:
      return [
        { text: "뭘봐", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
      ];
    case LabelType.git:
      return [
        { text: "뭘봐", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
        { text: "", speed: 50 },
      ];
  }
};
