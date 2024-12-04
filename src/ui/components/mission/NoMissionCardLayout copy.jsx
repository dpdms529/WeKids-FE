export const NoMissionCardLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className={`w-[330px] bg-purple01/20 rounded-xl px-10 py-10`}>
        {children}
      </div>
    </div>
  );
};
