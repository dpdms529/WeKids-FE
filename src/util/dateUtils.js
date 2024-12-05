// 날짜 포맷 함수
export const formatShortDate = (dateString) => {
  const date = new Date(dateString);
  return `${String(date.getMonth() + 1).padStart(2, "0")}.${String(
    date.getDate(),
  ).padStart(2, "0")}`;
};


export const formatDate = (dateString) => {
  // 날짜 문자열에서 년, 월, 일 추출
  const [year, month, day] = dateString.split('-').map(Number);
  
  // 새로운 Date 객체 생성
  const date = new Date(year, month - 1, day);
  
  const weekDays = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토'
  };

  return `${year}년 ${month}월 ${day}일 (${weekDays[date.getDay()]}) 까지`;
};