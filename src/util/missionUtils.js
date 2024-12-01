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
      ACC: "bg-[#57A9FB]",
      NEW: "bg-[#F8DEE7]",
      PRO: "bg-[#E1B2C6]",
      REJ: "bg-[#F24646]",
      DONE: "bg-[#A3A3A3]"
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