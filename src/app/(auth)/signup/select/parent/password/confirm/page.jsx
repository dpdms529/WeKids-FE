import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import SignIn from "@/src/ui/Components/auth/SignIn";
import ConfirmItem from "@/src/ui/Components/signup/ConfirmItem";

export default function Page() {
  return (
    <div className="flex flex-col bg-white overflow-hidden h-screen max-w-[393px]">
      <div className="flex flex-col p-10 h-full">
        <div className="flex flex-col gap-6 h-5/6 justify-center items-center">
          <ConfirmItem />
        </div>

        <div className="flex h-1/6 w-full items-end pb-1">
          <SignIn>
            <CustomButton size="mediumLarge" rounded={true}>
              확인
            </CustomButton>
          </SignIn>
        </div>
      </div>
    </div>
  );
}
