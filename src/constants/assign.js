export const assigndata = [
  "1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세",
  "2. 남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세",
  "3. 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세",
  "4. 이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세 무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세",
];

export const alarmData = [
  {
    emoticon: "COMPLETED",
    title: "완료 미션 바로 보기",
    description: (missionName) =>
      `미션을 확인해보세요. <br/>아이가 ${missionName}미션을 완료했습니다.`,
  },
  {
    emoticon: "CARD",
    title: "등록된 카드 디자인 확인하기",
    description: () =>
      `아이가 만든 카드 디자인을 확인하고 카드를 발행해주세요!`,
  },
  {
    emoticon: "DOCUMENT",
    title: "협상 제안서 바로 보기",
    description: () =>
      `용돈 협상 제안서를 확인해보세요. <br/>아이가 용돈 협상 제안서를 등록했습니다!`,
  },
  {
    emoticon: "ANNOUNCEMENT",
    title: "휴일에도 자동이체가 가능합니다!",
    description: () => `2024년 10월 7일부터 휴일에도 자동이체가 가능해요!`,
  },
  {
    emoticon: "MESSAGE",
    title: "부모 동의 알림 확인하기",
    description: () =>
      `가족관계 증명서 확인해주기. <br/>아이가 소셜로그인 가입을 위한 부모 동의 알림을 보냈습니다!`,
  },
];

export const generateYears = (startYear, endYear) => {
  return Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i,
  );
};

export const generateMonths = () => {
  return Array.from({ length: 12 }, (_, i) => i + 1);
};

export const generateDates = () => {
  return Array.from({ length: 31 }, (_, i) => i + 1);
};

export const year = generateYears(1940, 2024);
export const month = generateMonths();
export const date = generateDates();

export const validationMessages = {
  1: "주민번호와 주민번호 확인이 일치하지 않아요.",
  2: "주민번호 입력칸에 빈칸이 있어요.",
  3: "주민번호 확인칸에 빈칸이 있어요.",
  4: "약관동의를 다 해주세요.",
};
