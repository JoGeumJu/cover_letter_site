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
          "Client Interactive Event 및 라이브러리의 사용, 그리고 웹의 반응형 구현 등을 배운 프로젝트",
          "Swiper 라이브러리의 높은 난이도의 사용법과 반응형 스와이퍼를 구현하기 위한 breakPoint 기능의 사용으로 라이브러리의 활용 능력이 향상됨",
          "기존 CU 사이트에서 특정 해상도 범위에서 메뉴 팝업 아이콘이 화면 바깥으로 나가 보이지 않는 이슈가 존재함, 반응형 기준의 재조정 및 CSS의 추가적인 반응형 설정을 통해 이를 해결함",
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
          "react-modal",
          "recoil",
          "swiper",
        ],
        performance: [
          "Next라는 새로운 프레임워크와 Typescript에 적응하기 위해 시작한 프로젝트",
          "전역변수 상태관리, Typescript를 통한 데이터타입 지정의 공부를 위해, '테마 설정'이 가능한 '계산기'를 만들기로 결정",
          "이외에도 웹 반응형의 구현과, Swiper, react-modal, Routing 및 emotion과 같은 라이브러리 기술들을 복습하고 사용해보는 경험을 쌓음",
          "기존의 OS의 계산기 기능들 뿐 아니라, 이전 계산 내역을 기록하고 필요할 때 불러올 수 있는 '값 기록' 기능을 추가하여 사용자의 편의성을 높임",
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
          "Next",
          "Typescript",
          "axios",
          "recoil",
          "react-query",
          "react-spring",
        ],
        performance: [
          "프로젝트 경험이 풍부한 팀원들과 협력하여 체계적인 기획 및 구축 방법들을 배운 프로젝트",
          "특히 커밋 컨벤션, 컴포넌트 파일 구조화, API파일 및 폴더 조직화, API 유틸리티 함수, formData, 공용 컴포넌트 재사용성을 배울 수 있었음",
          "공용컴포넌트 컴포넌트화, formData Photo 등록 로직 컴포넌트화, 고객센터·1:1문의·FAQ·알림·리뷰작성페이지 구현 담당",
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
          "react-transition-group",
          "increase-memory-limit",
          "react-hook-form",
          "react-query",
          "recoil",
          "react-intersection-observer",
        ],
        performance: [
          "기획 및 퍼블리싱 과정에서 즐거움을 느끼고, 나아가 가상의 웹사이트 발주 회사를 컨셉으로 프로젝트를 진행",
          "고객 페이지와 관리자 페이지의 분리를 위해 고객과 관리자를 구분하여 각각의 계정에 따라 접근 권한을 설정하고, 옳지 않은 페이지 접근 시에는 메인 페이지로 리디렉션함",
          "layout과 header 및 footer, modal(alert modal, warning modal), 메인·로그인·발주신청·마이페이지(고객페이지) / 로그인·발주신청페이지(관리자페이지) 구현",
          "EC2 + nginx +Jenkins를 통해 동적배포에 성공함",
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
          "kakao_flutte_sdk",
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
          "평소 반려견을 키우며 생기는 루틴적인 일정들을 효율적으로 관리하고자 했던 경험을 토대로 시작한 Flutter 프로젝트",
          "평소 관심이 생겨 공부했던 Flutter를 적극 사용한 앱 프로젝트",
          "1차 배포 이후에도 Langchain을 활용하여 채팅 문의 구현, 상태 관리 매니저 라이브러리의 적용, UI 변경 및 QA 수정 등의 추가적인 개발 및 유지보수 진행",
          "지금까지도 Flutter는 React, Next와 같이 지속적으로 공부하고 있는 중",
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
          "Client Interactive Event 및 라이브러리의 사용, 그리고 웹의 반응형 구현 등을 배운 프로젝트",
          "Swiper 라이브러리의 높은 난이도의 사용법과 반응형 스와이퍼를 구현하기 위한 breakPoint 기능의 사용으로 라이브러리의 활용 능력이 향상됨",
          "기존 CU 사이트에서 특정 해상도 범위에서 메뉴 팝업 아이콘이 화면 바깥으로 나가 보이지 않는 이슈가 존재함, 반응형 기준의 재조정 및 CSS의 추가적인 반응형 설정을 통해 이를 해결함",
        ],
      };
  }
};
