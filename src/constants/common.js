// src/constants/characterInfo.js

export const characterInfoMap = {
  WEBEE: {
    name: "위비",
    imagePath: "/images/accountWeebeeImg.svg", // 위비 이미지 경로
    colorClass: "bg-main02", // CSS 클래스 이름으로 색상 관리
  },
  BOMBOM: {
    name: "봄봄",
    imagePath: "/images/bombomImg.svg", // 봄봄 이미지 경로
    colorClass: "bg-colorBombom", // CSS 클래스 이름으로 색상 관리
  },
  DALBO: {
    name: "달보",
    imagePath: "/images/dalboImg.svg", // 달보 이미지 경로
    colorClass: "bg-colorDalbo", // CSS 클래스 이름으로 색상 관리
  },
  DUJI: {
    name: "두지",
    imagePath: "/images/dalboImg.svg", // 두지 이미지 경로
    colorClass: "bg-colorDuji", // CSS 클래스 이름으로 색상 관리
  },
  KU: {
    name: "쿠",
    imagePath: "/images/dalboImg.svg", // 쿠 이미지 경로
    colorClass: "bg-colorKu", // CSS 클래스 이름으로 색상 관리
  },
  PUDDING: {
    name: "푸딩",
    imagePath: "/images/dalboImg.svg", // 푸딩 이미지 경로
    colorClass: "bg-colorPudding", // CSS 클래스 이름으로 색상 관리
  },
  //Todo 두지,쿠,푸딩에 맞는 이미지로 경로 수정해줘야 함
};

export const urlPath = {
  HOME: "/",
  TRANSACTION_HISTORY: "/transaction-history",
  ACCOUNT_LIST: "/account-list",
  TRANSFER: "/transfer",
  DONE: "/transfer/done",
};
