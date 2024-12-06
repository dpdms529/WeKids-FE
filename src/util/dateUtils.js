// 날짜 포맷 함수
export const formatShortDate = (dateString) => {
  const date = new Date(dateString);
  return `${String(date.getMonth() + 1).padStart(2, "0")}.${String(
    date.getDate(),
  ).padStart(2, "0")}`;
};


export const formattoDate = (dateString) => {
  const date = new Date(dateString);
  
  // 요일을 한글로 변환하기 위한 매핑
  const weekDays = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토'
  };

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDay = weekDays[date.getDay()];

  return `${year}년 ${month}월 ${day}일 (${weekDay}) 까지`;
};

// 사용 예시
// const localDate = "2024-11-20T00:00:00";
// console.log(formatDate(localDate)); // "2024년 11월 20일 (수) 까지"