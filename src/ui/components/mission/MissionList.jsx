import Image from "next/image";
import { characterInfoMap } from "@/src/constants/common";

const DUMMY_MISSIONS = [
  {
    missionId: "mission_1",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총30,000원을 받을 수 있어요",
    state: "ACC",
    deadline: "2024-11-20",
    category: "DAILY",
    childName: "김위키",
    childProfile: "HEARTSPRING",
    image: null,
    memo: ""
  },
  {
    missionId: "mission_2",
    title: "두 번째 미션",
    content: "미션 성공 시 총20,000원을 받을 수 있어요",
    state: "NEW",
    deadline: "2024-11-25",
    category: "WEEKLY",
    childName: "이위키",
    childProfile: "CHACHAPING",
    image: null,
    memo: ""
  },
  {
    missionId: "mission_3",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총30,000원을 받을 수 있어요",
    state: "PRO",
    deadline: "2024-11-20",
    category: "DAILY",
    childName: "김위키",
    childProfile: "DADAPING",
    image: null,
    memo: ""
  },
  {
    missionId: "mission_4",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총30,000원을 받을 수 있어요",
    state: "DONE",
    deadline: "2024-11-20",
    category: "DAILY",
    childName: "김위키",
    childProfile: "HEARTSPRING",
    image: null,
    memo: ""
  },
];

export default function MissionList() {
  return (
    <div className="flex flex-col gap-2">
      {DUMMY_MISSIONS.map((mission) => (
        <div 
          key={mission.missionId} 
          className="bg-[#F0F8FF] rounded-2xl p-4 flex flex-col"
        >
          {/* 상단 영역: 프로필 이미지와 미션 정보 */}
          <div className="flex items-start gap-3">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
            <Image
                src={characterInfoMap[mission.childProfile].imagePath}
                alt={mission.childName}
                width={68}
                height={86}
              />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{mission.title}</div>
              <div className="text-xs text-gray-600">{mission.content}</div>
              {/* 하단 영역: 날짜와 상태 */}
                <div className="flex justify-between items-center mt-2">
                    <div className="text-xs text-gray-400">
                    {formatDate(mission.deadline)}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(mission.state)}`}
                >
                  {getStatusText(mission.state)}
                   </div>
              </div>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekDay = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
  
  return `${year}년 ${month}월 ${day}일 (${weekDay}) 까지`;
}

function getStatusStyle(state) {
  const styles = {
    ACC: "bg-blue-100 text-blue-500",
    NEW: "bg-green-100 text-green-500",
    PRO: "bg-pink-100 text-pink-500",
    RED: "bg-red-100 text-red-500"
  };
  return styles[state] || "";
}

function getStatusText(state) {
    const statusMap = {
      ACC: "ACC",
      NEW: "NEW",
      PRO: "PRO",
      RED: "RED"
    };
    return statusMap[state] || state;
  }