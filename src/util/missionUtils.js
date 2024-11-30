export function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDay = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    
    return `${year}년 ${month}월 ${day}일 (${weekDay}) 까지`;
  }
  
  export function getStatusStyle(state) {
    const styles = {
      ACC: "bg-blue-100 text-blue-500",
      NEW: "bg-green-100 text-green-500",
      PRO: "bg-pink-100 text-pink-500",
      REJ: "bg-red-100 text-red-500",
      DONE: "bg-gray-100 text-gray-500"
    };
    return styles[state] || "";
  }
  
  export function getBackgroundStyle(state) {
    const styles = {
      ACC: "bg-[#52B6E7]", 
      NEW: "bg-[#DCF0FA]",
      PRO: "bg-[#DCF0FA]",
      REJ: "bg-[#FCDADA]",
      DONE: "bg-[#F6F6F6]"
    };
    return styles[state] || "bg-[#52B6E7]";
  }
  
  export function getStatusText(state) {
    const statusMap = {
      ACC: "ACC",
      NEW: "NEW",
      PRO: "PRO",
      REJ: "REJ",
      DONE: "DONE"
    };
    return statusMap[state] || state;
}