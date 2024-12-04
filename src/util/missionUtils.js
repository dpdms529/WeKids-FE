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
      ACC: "bg-main02",
      NEW: "bg-pink01",
      PRO: "bg-purple01",
      REJ: "bg-red01",
      DONE: "bg-neutral-400"
    };
    return styles[state] || "";
  }
  
  export function getBackgroundStyle(state) {
    const styles = {
      ACC: "bg-blue01", 
      NEW: "bg-main02 opacity-20",
      PRO: "bg-main02 opacity-20",
      REJ: "bg-pink01",
      DONE: "bg-stone-300"
    };
    return styles[state] || "bg-";
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