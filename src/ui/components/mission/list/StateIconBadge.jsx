import StateIcon from "./StateIcon";

export default function StateIconBadge({ state }) {
  return (
    <div className="w-[51px] h-[18px] flex justify-center items-center bg-white rounded-full">
      <StateIcon state={state} />
    </div>
  );
}
