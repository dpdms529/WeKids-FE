import MissionCard from "@/src/ui/components/mission/MissionCard";
import FilterHeader from "@/src/ui/components/mission/list/FilterHeader";

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
    childProfile: "GOGOPING",
    image: null,
    memo: ""
  },
  {
    missionId: "mission_6",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "DONE",
    deadline: "2024-11-20",
    category: "DAILY",
    childName: "홍찬의",
    childProfile: "HAPPYING",
    image: null,
    memo: ""
  },
];

export default function MissionList() {
    return (

      <div className="flex flex-col w-full">
        <FilterHeader />
        <div className="flex flex-col items-center gap-2">
          {DUMMY_MISSIONS.map((mission) => (
          <MissionCard key={mission.missionId} mission={mission} />))}
        </div>
      </div>
    );
  }