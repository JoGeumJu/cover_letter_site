import {
  DOG_SO,
  CU_SO,
  CU_EO,
  CAL_SO,
  CAL_EO,
  ST_SO,
  ST_EO,
  DOS_SO,
  DOS_EO,
  MEONG_SO,
  MEONG_EO,
  GIT_EO,
} from "./scroll_offset";
export interface DataType {
  text: string;
  type:
    | "bubble"
    | "planet"
    | "text"
    | "scroll_down"
    | "scroll_up"
    | "scroll_init";
  position?: number[];
  right?: boolean;
  bottom?: boolean;
}

export const moveModeScannerData: DataType[] = [
  {
    text: "CU행성으로",
    type: "text",
    position: [-340, 100],
    bottom: true,
  },
  {
    text: "계산기행성으로",
    type: "text",
    position: [-200, -40],
    bottom: true,
  },
  {
    text: "가시붕어빵행성으로",
    type: "text",
    position: [-40, -130],
    bottom: true,
  },
  {
    text: "모니터행성으로",
    type: "text",
    position: [120, -395],
  },
  {
    text: "고양이행성으로",
    type: "text",
    position: [275, -295],
  },
  {
    text: "GIT행성으로",
    type: "text",
    position: [340, 120],
    bottom: true,
    right: true,
  },
];

export const scannerData: {
  init: DataType[];
  init_cu: DataType[];
  cu: DataType[];
  cu_cal: DataType[];
  cal: DataType[];
  cal_st: DataType[];
  st: DataType[];
  st_dos: DataType[];
  dos: DataType[];
  dos_meong: DataType[];
  meong: DataType[];
  meong_git: DataType[];
  git: DataType[];
} = {
  init: [
    {
      text: "말풍선을 클릭해서 정보 확인",
      type: "bubble",
      position: [240, -110],
    },
    { text: "말풍선을 내려 넓은 화면", type: "bubble", position: [273, -350] },
    {
      text: "행성버튼을 눌러 행성 이동",
      type: "bubble",
      position: [273, -302],
    },
    {
      text: "아래로 스크롤하여 이동",
      type: "scroll_init",
    },
  ],
  init_cu: [
    { text: "CU행성으로", type: "scroll_up" },
    { text: "시작위치로", type: "scroll_down" },
  ],
  cu: [
    {
      text: "말풍선을 클릭해서 정보 확인",
      type: "bubble",
      position: [240, -110],
    },
    {
      text: "'CU클론코딩' 프로젝트의 행성화",
      type: "planet",
      position: [0, -7],
    },
    {
      text: "프로젝트의 주요 스택들",
      type: "text",
      position: [280, -50],
    },
    {
      text: "디테일페이지로 이동",
      type: "text",
      position: [-340, -180],
      right: true,
    },
  ],
  cu_cal: [
    { text: "계산기행성으로", type: "scroll_up" },
    { text: "CU행성으로", type: "scroll_down" },
  ],
  cal: [
    {
      text: "말풍선을 클릭해서 정보 확인",
      type: "bubble",
      position: [240, -110],
    },
    {
      text: "'커스텀 계산기' 프로젝트의 행성화",
      type: "planet",
      position: [0, 5],
    },
    {
      text: "프로젝트의 주요 스택들",
      type: "text",
      position: [245, -180],
      bottom: true,
    },
    {
      text: "디테일페이지로 이동",
      type: "text",
      position: [-300, -160],
    },
  ],
  cal_st: [
    { text: "가시붕어빵행성으로", type: "scroll_up" },
    { text: "계산기행성으로", type: "scroll_down" },
  ],
  st: [
    {
      text: "말풍선을 클릭해서 정보 확인",
      type: "bubble",
      position: [240, -110],
    },
    {
      text: "'노점픽업주문' 프로젝트의 행성화",
      type: "planet",
      position: [17, 0],
    },
    {
      text: "프로젝트의 주요 스택들",
      type: "text",
      position: [-300, -165],
      right: true,
    },
    {
      text: "디테일페이지로 이동",
      type: "text",
      position: [320, -310],
      right: true,
    },
  ],
  st_dos: [
    { text: "모니터행성으로", type: "scroll_up" },
    { text: "가시붕어빵행성으로", type: "scroll_down" },
  ],
  dos: [
    {
      text: "말풍선을 클릭해서 정보 확인",
      type: "bubble",
      position: [240, -110],
    },
    {
      text: "'웹발주회사' 프로젝트의 행성화",
      type: "planet",
      position: [14, -5],
    },
    {
      text: "프로젝트의 주요 스택들",
      type: "text",
      position: [190, -330],
      bottom: true,
    },
    {
      text: "디테일페이지로 이동",
      type: "text",
      position: [-310, 90],
      bottom: true,
      right: true,
    },
  ],
  dos_meong: [
    { text: "고양이행성으로", type: "scroll_up" },
    { text: "모니터행성으로", type: "scroll_down" },
  ],
  meong: [
    {
      text: "말풍선을 클릭해서 정보 확인",
      type: "bubble",
      position: [240, -110],
    },
    {
      text: "'애완동물스케쥴러' 프로젝트의 행성화",
      type: "planet",
      position: [-4, 5],
    },
    {
      text: "프로젝트의 주요 스택들",
      type: "text",
      position: [-250, -190],
      bottom: true,
      right: true,
    },
    {
      text: "디테일페이지로 이동",
      type: "text",
      position: [330, -100],
      bottom: true,
    },
  ],
  meong_git: [
    { text: "GIT행성으로", type: "scroll_up" },
    { text: "고양이행성으로", type: "scroll_down" },
  ],
  git: [
    {
      text: "말풍선을 클릭해서 정보 확인",
      type: "bubble",
      position: [240, -110],
    },
    {
      text: "'GIT' 주소의 행성화",
      type: "planet",
      position: [0, -10],
    },
  ],
};

export const getScannerLabel = (offset: number) => {
  if (DOG_SO == offset) return "init";
  else if (DOG_SO < offset && offset < CU_SO) return "init_cu";
  else if (CU_SO < offset && offset < CU_EO) return "cu";
  else if (CU_EO < offset && offset < CAL_SO) return "cu_cal";
  else if (CAL_SO < offset && offset < CAL_EO) return "cal";
  else if (CAL_EO < offset && offset < ST_SO) return "cal_st";
  else if (ST_SO < offset && offset < ST_EO) return "st";
  else if (ST_EO < offset && offset < DOS_SO) return "st_dos";
  else if (DOS_SO < offset && offset < DOS_EO) return "dos";
  else if (DOS_EO < offset && offset < MEONG_SO) return "dos_meong";
  else if (MEONG_SO < offset && offset < MEONG_EO) return "meong";
  else if (MEONG_EO < offset && offset < GIT_EO - 0.001) return "meong_git";
  else return "git";
};
