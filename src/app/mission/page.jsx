import { auth } from "@/auth";
import { getMissionList } from "@/src/apis/mission";
import { ChildMissionHome } from "@/src/ui/components/mission/child/ChildMissionHome";
import ParentMissionHome from "@/src/ui/components/mission/parent/ParentMissionHome";

import Header from "@/src/ui/layout/Header";

const page = async () => {
  const session = await auth();
  const authorization = session?.user?.Authorization;

  if (!authorization) redirect("/onboard");
  const memberType = session.user.role;
  const data = await getMissionList();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex justify-center">
          {memberType === "ROLE_PARENT" ? (
            <ParentMissionHome data={data} />
          ) : (
            <ChildMissionHome initialData={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
