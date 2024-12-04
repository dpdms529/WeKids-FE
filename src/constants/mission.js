export const getCurrentDateInKoreanFormat = () => {
  const year = period.getFullYear();
  const month = String(period.getMonth() + 1).padStart(2, "0");
  const day = String(period.getDate()).padStart(2, "0");

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const weekDay = weekDays[period.getDay()];

  return `${year}년 ${month}월 ${day}일 (${weekDay})`;
};
