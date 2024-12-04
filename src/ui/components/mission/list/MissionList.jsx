import MissionCard from "@/src/ui/components/mission/list/MissionCard";
import FilterHeader from "@/src/ui/components/mission/list/FilterHeader";
import { useMissionFilterStore } from "@/src/stores/missionFilterStore";

export default function MissionList({ isParent }) {
  const { selectedChild, selectedCategory } = useMissionFilterStore();

  const filteredMissions = DUMMY_MISSIONS.filter((mission) => {
    // 자식 화면일 경우 로그인한 자신의 미션만 보여줌
    if (!isParent) {
      // TODO: 실제 로그인한 자식 사용자의 ID나 이름으로 수정 필요
      const currentChildName = "안찬웅"; // 예시
      return mission.childName === currentChildName;
    }
    // 부모 화면일 경우 필터링 적용
    const matchesChild =
      selectedChild === "ALL" || mission.childName === selectedChild;
    const matchesCategory =
      !selectedCategory || mission.category === selectedCategory;

    return matchesChild && matchesCategory;
  });

  return (
    <div className="flex flex-col w-full">
      {isParent && <FilterHeader />}
      <div className="flex flex-col items-center gap-2">
        {filteredMissions.map((mission) => (
          <MissionCard
            key={mission.missionId}
            mission={mission}
            isParent={isParent}
          />
        ))}
      </div>
    </div>
  );
}

const DUMMY_MISSIONS = [
  {
    missionId: "mission_1",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "ACC",
    deadline: "2024-11-20",
    category: "HOUSE_WORK",
    childName: "안찬웅",
    childProfile: "HEARTSPRING",
    image: null,
    memo: "",
  },
  {
    missionId: "mission_2",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "NEW",
    deadline: "2024-11-25",
    category: "SELF_DEVELOPMENT",
    childName: "구자빈",
    childProfile: "CHACHAPING",
    image: null,
    memo: "",
  },
  {
    missionId: "mission_3",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "PRO",
    deadline: "2024-11-20",
    category: "LIFE_HABITS",
    childName: "조예은",
    childProfile: "DADAPING",
    image: null,
    memo: "",
  },
  {
    missionId: "mission_4",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "REJ",
    deadline: "2024-11-20",
    category: "ETC",
    childName: "강현우",
    childProfile: "HEARTSPRING",
    image: null,
    memo: "",
  },
  {
    missionId: "mission_5",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "DONE",
    deadline: "2024-11-20",
    category: "HOUSE_WORK",
    childName: "최윤정",
    childProfile: "GOGOPING",
    image: null,
    memo: "",
  },
  {
    missionId: "mission_6",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "DONE",
    deadline: "2024-11-20",
    category: "LIFESTYLE_HABITS",
    childName: "홍찬의",
    childProfile: "HAPPYING",
    image: null,
    memo: "",
  },
];
