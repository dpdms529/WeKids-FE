// src/constants/characterInfo.js

export const characterInfoMap = {
  HEARTSPRING: {
    name: "하츄핑",
    imagePath: "/images/hachupingImg.svg", // 하츄핑 이미지 경로
    colorClass: "bg-pinkHachu", // CSS 클래스 이름으로 색상 관리
  },
  DADAPING: {
    name: "바로핑",
    imagePath: "/images/dadapingImg.svg", // 바로핑 이미지 경로
    colorClass: "bg-blueDada", // CSS 클래스 이름으로 색상 관리
  },
  GOGOPING: {
    name: "아자핑",
    imagePath: "/images/gogopingImg.svg", // 아자 이미지 경로
    colorClass: "bg-yellowGogo", // CSS 클래스 이름으로 색상 관리
  },
  CHACHAPING: {
    name: "차차핑",
    imagePath: "/images/chachapingImg.svg", // 차차핑 이미지 경로
    colorClass: "bg-yellowChacha", // CSS 클래스 이름으로 색상 관리
  },
  LALAPING: {
    name: "라라핑",
    imagePath: "/images/lalapingImg.svg", // 라라핑 이미지 경로
    colorClass: "bg-purpleLala", // CSS 클래스 이름으로 색상 관리
  },
  HAPPYING: {
    name: "해핑",
    imagePath: "/images/happingImg.svg", // 해핑 이미지 경로
    colorClass: "bg-pinkHap", // CSS 클래스 이름으로 색상 관리
  },
};

export const colorTypeMap = {
  PINK1: {
    name: "하츄핑",
    colorClass: "bg-pinkHachu", // CSS 클래스 이름으로 색상 관리
  },
  BLUE: {
    name: "바로핑",
    colorClass: "bg-blueBaro", // CSS 클래스 이름으로 색상 관리
  },
  YELLOW: {
    name: "아자핑",
    colorClass: "bg-yellowAja", // CSS 클래스 이름으로 색상 관리
  },
  GREEN: {
    name: "차차핑",
    colorClass: "bg-greenChacha", // CSS 클래스 이름으로 색상 관리
  },
  PURPLE: {
    name: "라라핑",
    colorClass: "bg-purpleLara", // CSS 클래스 이름으로 색상 관리
  },
  PINK2: {
    name: "해핑",
    colorClass: "bg-pinkHap", // CSS 클래스 이름으로 색상 관리
  },
};

export const urlPath = {
  HOME: "/",
  TRANSACTION_HISTORY: "/transaction-history",
  ACCOUNT_LIST: "/account-list",
  TRANSFER: "/transfer",
  DONE: "/transfer/done",
  SIGNUP_SELECT: "/select", // 부모 자녀 선택(임시)
  SIGNUP_SELF: "/select/self", // 본인인증 회원가입 뷰(임시)
  SIGNUP_PHONE: "/select/phone", //(PASS 사진)
  SIGNUP_PASSWORD: "/select/self/password",
  SIGNUP_CONFIRM: "/select/self/password/confirm",
  SIGNUP_GET_ACCOUNT: "/account",
  CARD_SELECT:"/card-select",
  CARD_PARENT_APPROVE:"/card/parent"
};
