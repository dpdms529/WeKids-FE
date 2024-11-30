import Image from "next/image";
import { characterInfoMap } from "@/src/constants/common";
import StateIcon from "./StateIcon";

const DUMMY_MISSIONS = [
  {
    missionId: "mission_1",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "ACC",
    deadline: "2024-11-20",
    category: "DAILY",
    childName: "안찬웅",
    childProfile: "HEARTSPRING",
    image: null,
    memo: ""
  },
  {
    missionId: "mission_2",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "NEW",
    deadline: "2024-11-25",
    category: "WEEKLY",
    childName: "구자빈",
    childProfile: "CHACHAPING",
    image: null,
    memo: ""
  },
  {
    missionId: "mission_3",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "PRO",
    deadline: "2024-11-20",
    category: "DAILY",
    childName: "조예은",
    childProfile: "DADAPING",
    image: null,
    memo: ""
  },
  {
    missionId: "mission_4",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "REJ",
    deadline: "2024-11-20",
    category: "DAILY",
    childName: "강현우",
    childProfile: "HEARTSPRING",
    image: null,
    memo: ""
  },
  {
    missionId: "mission_5",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "DONE",
    deadline: "2024-11-20",
    category: "DAILY",
    childName: "최윤정",
    childProfile: "DADAPING",
    image: null,
    memo: ""
  },
];

export default function MissionList() {
  return (
    <div className="flex flex-col items-center gap-2">
      {DUMMY_MISSIONS.map((mission) => (
        <div 
          key={mission.missionId} 
          className={`
            w-[322px] h-[104px] flex-shrink-0 
            rounded-2xl p-4 flex flex-col 
            ${getBackgroundStyle(mission.state)}
            shadow-sm
            relative
          `}
        >
          {/* 상단 영역: 프로필 이미지와 미션 정보 */}
          <div className="flex items-start gap-3">
            <div className="w-[71px] h-[86px] bg-white rounded-lg flex flex-col items-center justify-center -mt-2">
            <Image
                src={characterInfoMap[mission.childProfile].imagePath}
                alt={mission.childName}
                width={68}
                height={68}
              />
              <span className="text-xs text-gray-600">{mission.childName}</span>
            </div>

            <div>
                <div className="flex flex-col justify-center flex-shrink-0 text-R-15 truncate whitespace-nowrap overflow-hidden">
                    {mission.title}
              </div>
              <div className="flex flex-col justify-center flex-shrink-0 text-R-12 text-xs font-normal">
                {mission.content}
              </div>
              
              {/* 하단 영역: 날짜와 상태 */}
              <div className="flex justify-between items-center mt-2">
                <div className="text-[10px] flex items-center gap2 text-xs gap-1 text-gray-400 whitespace-nowrap">
                    <StateIcon state={mission.state} />
                    {formatDate(mission.deadline)}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(mission.state)} ml-3`}
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
    REJ: "bg-red-100 text-red-500",
    DONE: "bg-gray-100 text-gray-500"
  };
  return styles[state] || "";
}

function getBackgroundStyle(state) {
    const styles = {
      ACC: "bg-[#52B6E7]", 
      NEW: "bg-[#DCF0FA]",
      PRO: "bg-[#DCF0FA]",
      REJ: "bg-[#FCDADA]",
      DONE: "bg-[#F6F6F6]"
    };
    return styles[state] || "bg-[#52B6E7]";
  }

function getStatusText(state) {
    const statusMap = {
      ACC: "ACC",
      NEW: "NEW",
      PRO: "PRO",
      REJ: "REJ",
      DONE: "DONE"
    };
    return statusMap[state] || state;
  }
