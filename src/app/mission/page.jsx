import { auth } from "@/auth";
import { ChildMissionHome } from "@/src/ui/components/mission/child/ChildMissionHome";
import { ParentMissionHome } from "@/src/ui/components/mission/parent/ParentMissionHome";
import Header from "@/src/ui/layout/Header";

export const MISSION_DUMMY = [
  {
    missionId: "mission_001",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요dsaffdfsdfdsfdsdsfds",
    state: "ACC",
    deadline: "2024년 11월 20일 (수) 까지",
    category: "HOUSE_WORK",
    childName: "안찬웅",
    childProfile: "/images/chachapingImg.svg",
    image: null,
    memo: null,
  },
  {
    missionId: "mission_002",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "NEW",
    deadline: "2024년 11월 20일 (수) 까지",
    category: "SELF_DEVELOPMENT",
    childName: "달달핑",
    childProfile: "/images/daldalpingImg.svg",
    image: null,
    memo: null,
  },
  {
    missionId: "mission_003",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "SUB",
    deadline: "2024년 11월 20일 (수) 까지",
    category: "HOUSE_WORK",
    childName: "초롱핑",
    childProfile: "/images/chorongpingImg.svg",
    image: null,
    memo: null,
  },
  {
    missionId: "mission_004",
    title: "미션명 미션명 미션명 미션명",
    content: "미션 성공 시 총 30,000원을 받을 수 있어요",
    state: "REJ",
    deadline: "2024년 11월 20일 (수) 까지",
    category: "ETC",
    childName: "달달핑",
    childProfile: "/images/daldalpingImg.svg",
    image: null,
    memo: "거절 사유",
  },
  {
    missionId: "mission_005",
    title: "여기는 미션명 미션명 미션명",
    content: "미션 성공 시 총 10000,000원을 받을 수 있어요",
    state: "DONE",
    deadline: "2024년 11월 20일 (수) 까지",
    category: "HOUSE_WORK",
    childName: "달달핑",
    childProfile: "/images/daldalpingImg.svg",
    image: null,
    memo: "거절 사유",
  },
];

export const NO_MISSION_DUMMY = [];

const page = async () => {
  const session = await auth();
  const authorization = session?.user?.Authorization;

  if (!authorization) redirect("/onboard");
  const memberType = session.user.role;
  const data = MISSION_DUMMY;
  return (
    <>
      <Header />

      <div className="flex justify-center">
        {memberType === "ROLE_PARENT" ? (
          <ParentMissionHome data={data} />
        ) : (
          <ChildMissionHome data={data} />
        )}
      </div>
    </>
  );
};

export default page;
