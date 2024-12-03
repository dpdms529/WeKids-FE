import { NoMissionMessageBox } from "../NoMissionMessageBox";

export const ChildNoMissionCard = () => {
  return (
    <NoMissionCardLayout bgColor="bg-purple01/30">
      <NoMissionMessageBox
        title={`부모님에게 미션\n 등록을 요청해보세요!`}
        description={`"미션 진행상황\n카테고리를 통해 쉽게 미션을\n확인하여 용돈을 받으세요!"`}
      />
      <p>ghjgjh</p>
    </NoMissionCardLayout>
  );
};
