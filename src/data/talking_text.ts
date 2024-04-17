export enum LabelType {
  intro,
  cu,
  calculator,
  streetStore,
  dos,
  meonghae,
  git,
}

export const TalkingText = (label: LabelType) => {
  switch (label) {
    case LabelType.intro:
      return [
        { text: "말풍선을 클릭해봐! 멍!", speed: 50 },
        { text: "안녕! 나와 함께 탐험할 준비 됐어? 멍?", speed: 50 },
        { text: "주인의 프로젝트들을 행성들로 만들어봤어! 멍!", speed: 50 },
        {
          text: "언제든 오른쪽 위 설명스캐너 버튼을 눌러\n정보를 얻을 수 있어, 멍!",
          speed: 40,
        },
        { text: "아래로 스크롤해서 출발해 보자! 멍!", speed: 50 },
      ];
    case LabelType.cu:
      return [
        { text: "이건..! CU 클론 코딩 행성이야! 멍!", speed: 50 },
        { text: "CU 로고를 클릭해봐! 멍~!", speed: 50 },
        {
          text: "도감을 보니 React를 공부하기 위해 만들었다고 해..\n열정이 엄청난걸..! 멍!",
          speed: 40,
        },
        {
          text: "이 프로젝트 Swiper와 웹 반응형에 신경 쓴 흔적이 보여! 멍!",
          speed: 40,
        },
        {
          text: "내 도감책을 보고 싶다면,\n행성 옆에 떠 있는 보라색 도감책을 눌러봐! 멍!",
          speed: 40,
        },
      ];
    case LabelType.calculator:
      return [
        { text: "계산기 행성이다! 멍!", speed: 50 },
        { text: "계산기 버튼들을 눌러봐~ 멍~!", speed: 50 },
        {
          text: "도감을 보니 Typescript와,\nNext를 배우기 위해 만들었다고 적혀있어, 멍",
          speed: 40,
        },
        {
          text: "이외에도 전역상태관리 라이브러리인\nRedux, Recoil을 공부했다고 적혀있어, 멍",
          speed: 40,
        },
        {
          text: "내 도감책을 보고 싶다면,\n행성 옆에 떠 있는 보라색 도감책을 눌러봐! 멍!",
          speed: 40,
        },
      ];
    case LabelType.streetStore:
      return [
        {
          text: '와! 가시붕어빵이야! 멍!\n(feat. 가시물고기 "아기공룡 둘리"中)',
          speed: 40,
        },
        {
          text: "왠지 마우스를 쳐다보고 있는 것 같은데...? 멍..?!",
          speed: 40,
        },
        {
          text: "도감을 보니 주변 노점들의 위치와 주문 및 픽업 등을\n제공하는 크로스 모바일 앱 프로젝트래! 멍!",
          speed: 40,
        },
        {
          text: "reat-query, react-hook-form 등을\n배울 수 있었다고도 적혀 있네~ 멍~!",
          speed: 40,
        },
        {
          text: "흠... 흠... 내 주인은 이 행성을 통해\n체계적인 팀 프로젝트에 대해 자세히 알게되었대! 멍!",
          speed: 40,
        },
        {
          text: "내 도감책을 보고 싶다면,\n행성 옆에 떠 있는 보라색 도감책을 눌러봐! 멍!",
          speed: 40,
        },
      ];
    case LabelType.dos:
      return [
        { text: "모니터가 켜졌어?! 멍!", speed: 50 },
        { text: "모니터 안의 버튼을 눌러봐! 멍!", speed: 50 },
        {
          text: "가상의 웹페이지 발주 회사를 컨셉으로 만든 프로젝트래! 멍!",
          speed: 40,
        },
        {
          text: "눈에 띄는 라이브러리로는 react-intersection-observer,\nreact-hook-form 그리고 fullcalendar가 있어, 멍",
          speed: 40,
        },
        {
          text: "주인이 처음으로 배포를 한 프로젝트라고 도감에 적혀있어..\n이때 꽤나 괴로워보였지.. 멍..",
          speed: 40,
        },
        {
          text: "내 도감책을 보고 싶다면,\n행성 옆에 떠 있는 보라색 도감책을 눌러봐! 멍!",
          speed: 40,
        },
      ];
    case LabelType.meonghae:
      return [
        {
          text: "이것은..! 주인이 나를 키우면서 얻은 경험을 토대로\n만든 어플 행성이야..! 멍!",
          speed: 40,
        },
        {
          text: "냥이를 클릭 할 때마다 모자를 계속 바꿔 쓴다는데..?\n정말일까? 멍?",
          speed: 40,
        },
        {
          text: "애완동물을 키우며 생기는 반복적인 일정들을\n관리해주는 어플이라고 적혀있어, 멍!",
          speed: 40,
        },
        {
          text: "주요 기능은 카카오 로그인, FCM알림, Langchain,\n게시글 및 리뷰, 캘린더 일정 관리 등이 있대, 멍",
          speed: 40,
        },
        {
          text: "프로젝트를 Google Play Store에 배포해서,\n실제로 다운받아 사용할 수 있어, 멍~!",
          speed: 40,
        },
        {
          text: "내 도감책을 보고 싶다면,\n행성 옆에 떠 있는 보라색 도감책을 눌러봐! 멍!",
          speed: 40,
        },
      ];
    case LabelType.git:
      return [
        { text: "주인의 Git 행성이야! 멍!", speed: 50 },
        {
          text: "클릭해서 주인의 Git 페이지로 이동할 수 있어, 멍!",
          speed: 50,
        },
        { text: "탐험은 여기까지야! 다음에 또 봐~! 멍! 멍~!", speed: 50 },
      ];
  }
};
