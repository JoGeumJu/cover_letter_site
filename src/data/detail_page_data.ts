export interface ContentType {
  name_s: string;
  name: string;
  date: string;
  explain: string;
  hasReleased: boolean;
  link: string;
  stack: string[];
  performance: string[];
}

export enum ContentKeyType {
  cu,
  cal,
  st,
  dos,
  meong,
}

export const DetailPageData = (contentKey: string): ContentType => {
  switch (contentKey) {
    case "cu":
      return {
        name_s: "cu",
        name: "clone-cu-web",
        date: "2022.10.02 ~ 2022.10.29",
        explain: "CU 웹사이트의 메인페이지를 기반으로 copy coding한 프로젝트",
        hasReleased: true,
        link: "https://clone-cu-web.vercel.app/",
        stack: [
          "React",
          "Javascript",
          "styled-components",
          "react-icons",
          "swiper",
        ],
        performance: [
          "React 공부를 복습하기 위해 시작한 프로젝트",
          "Client Interactive Event와 라이브러리의 사용, 웹의 반응형을 연습할 수 있었던 프로젝트",
          "'Swiper' 라이브러리를 다루면서 겪은 사용법 문제와, breakPoint와 같은 디테일 기능을 사용하며 라이브러리의 사용법을 익힘",
          "원래의 CU 사이트에서 반응형 관련 문제로 특정 범위에서 일부 UI가 화면 밖으로 나가 보이지 않음, 반응형 기준을 새로 구축하고, % 단위를 사용하여 해당 문제를 해결",
        ],
      };
    case "cal":
      return {
        name_s: "cal",
        name: "my-calculator",
        date: "2022.11.02 ~ 2022.11.25",
        explain:
          "다양한 테마 설정들(글자크기, 글씨체, 계산기 테마 색상, 어둠/낮모드)을 커스텀할 수 있는 웹 계산기 프로젝트",
        hasReleased: true,
        link: "https://my-calculator-one-pi.vercel.app/",
        stack: [
          "Next",
          "Typescript",
          "emotion",
          "react-icons",
          "react-modal",
          "recoil",
          "swiper",
        ],
        performance: [
          "Next라는 새로운 프레임워크와 Typescript에 적응하기 위해 시작한 프로젝트",
          "전역변수 상태관리, Typescript를 통한 데이터타입 지정의 공부를 위해, '테마 설정'이 가능한 '계산기'를 만들기로 결정",
          "이외에도 웹 반응형의 구현과, swiper, react-modal, routing, emotion 등의 라이브러리의 사용법을 익힘",
          "기존의 OS의 계산기와 달리, 결과 값을 기록하고, 원할 때 불러와 사용할 수 있는 '값 기록'의 기능을 추가하여 편의성을 높임",
        ],
      };
    case "st":
      return {
        name_s: "st",
        name: "street-vendor-front/customer",
        date: "2022.12.25 ~ 2023.05.19",
        explain:
          "주변 노점들의 위치 정보와, 메뉴주문, 예약픽업 기능들을 제공하는 크로스 모바일 앱 프로젝트",
        hasReleased: false,
        link: "",
        stack: [
          "React-Native",
          "Typescript",
          "axios",
          "react-modal",
          "recoil",
          "react-query",
          "react-spring",
          "react-hot-toast",
          "react-simple-star-rating",
        ],
        performance: [
          "협업의 업그레이드를 위해 시작한 풀스택 프로젝트",
          "실제로 협업중인 팀원과 같이 프로젝트를 진행하며, 체계적인 프로젝트의 설계란 무엇인지에 대해 공부함",
          "커밋 메시지 컨벤션, 공용 컴포넌트의 재사용성, 컴포넌트 관리, API 클라이언트 라이브러리, formData의 사용 등을 배웠음",
          "주인은 공용컴포넌트 제작과, formData를 사용한 파일등록 로직 구현, 고객센터·1:1문의·FAQ·알림·리뷰작성페이지 등등 퍼블리싱 및 기능구현",
        ],
      };
    case "dos":
      return {
        name_s: "dos",
        name: "develop-order-service",
        date: "2023.01.09 ~ 2023.01.08",
        explain:
          "웹사이트 발주신청을 받아 만들어주는 가상의 회사를 컨셉으로 한 웹 프로젝트",
        hasReleased: true,
        link: "https://develop-order-service.site/",
        stack: [
          "Next",
          "Typescript",
          "fullCalendar",
          "axios",
          "react-intersection-observer",
          "react-phone-number-input",
          "react-transition-group",
          "increase-memory-limit",
          "react-confetti",
          "react-hook-form",
          "react-query",
          "swiper",
        ],
        performance: [
          "주인의 아이디어 실현을 위한 프로젝트",
          "front-end의 팀장으로서, 레퍼지토리 생성 및 이슈, 커밋 컨벤션 규칙 생성 및 API 클라이언트 라이브러리 등을 구축함",
          "layout과 header 및 footer, modal(alert modal, warning modal), 메인·로그인·발주신청·마이페이지(고객페이지) 로그인·발주신청페이지(관리자페이지) 퍼블리싱 및 기능구현",
          "EC2 + nginx +Jenkins를 통해 동적배포에 성공함",
          "프로젝트의 팀장으로서, 탄력적인 프로젝트가 될 수 있도록 주마다 있는 미팅을 통해 진행도를 체크 및 관리함",
        ],
      };
    case "meong":
      return {
        name_s: "meong",
        name: "meonghae",
        date: "2022.10.2 ~ 2022.10.29",
        explain:
          "반려동물을 키우며 생기는 반복적이고, 주기적인 일정들을 쉽게 관리할 수 있도록 도와주는 스케쥴러 및 소통 어플",
        hasReleased: true,
        link: "https://play.google.com/store/apps/details?id=com.meonghae&hl=ko-KR",
        stack: [
          "Flutter",
          "video_player",
          "kakao_flutte_sdk",
          "image_picker",
          "file_picker",
          "carousel_slider",
          "table_calendar",
          "dio",
          "device_info",
          "firebase_messaging",
          "pull_to_refresh",
          "langchain_openai",
          "cached_network_image",
          "flutter_secure_storage",
          "flutter_dotenv",
        ],
        performance: [
          "평소 반려견을 키우며 필요했던 기능을 담은 앱 프로젝트",
          "주목을 받고 있는 flutter를 공부할 수 있는 좋은 기회라 여겨, 앱을 만들어 보고자 결심함",
          "프로젝트 아이디어의 제공자로서, 앱 기획과 구조 및 기초 디자인을 제작",
          "더 추가할 예정~",
        ],
      };
    default:
      return {
        name_s: "cu",
        name: "clone-cu-web",
        date: "2022.10.02 ~ 2022.10.29",
        explain: "CU 웹사이트의 메인페이지를 기반으로 copy coding한 프로젝트",
        hasReleased: true,
        link: "https://clone-cu-web.vercel.app/",
        stack: [
          "React",
          "Javascript",
          "styled-components",
          "react-icons",
          "swiper",
        ],
        performance: [
          "React 공부를 복습하기 위해 시작한 프로젝트",
          "Client Interactive Event와 라이브러리의 사용, 웹의 반응형을 연습할 수 있었던 프로젝트",
          "'Swiper' 라이브러리를 다루면서 겪은 사용법 문제와, breakPoint와 같은 디테일 기능을 사용하며 라이브러리의 사용법을 익힘",
          "원래의 CU 사이트에서 반응형 관련 문제로 특정 범위에서 일부 UI가 화면 밖으로 나가 보이지 않음, 반응형 기준을 새로 구축하고, % 단위를 사용하여 해당 문제를 해결",
        ],
      };
  }
};
