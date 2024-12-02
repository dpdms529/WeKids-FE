import { NoMissionCardLayout } from "../NoMissionCardLayout copy";
import { NoMissionMessageBox } from "../NoMissionMessageBox";

export const ParentNoMissionCard = () => {
  return (
    <NoMissionCardLayout bgColor="bg-purple01/30">
      <NoMissionMessageBox
        title={`미션을 등록하고 \n아이에게 알림을 보내보세요!`}
        description={`"미션 진행상황\n카테고리, 자녀의 필터링을 통해 쉽게 미션을\n등록하고 확인하세요!"`}
      />
      <p>ghjgjh</p>
    </NoMissionCardLayout>
  );
};
