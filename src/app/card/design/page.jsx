import CustomButton from "@/src/ui/components/atoms/CustomButton";
import ChoiceDesign from "@/src/ui/components/card/ChoiceDesign";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const Page = () => {
    return(
        <div className="flex flex-col h-screen max-w-full overflow-hidden bg-sub02">
          <div className="flex p-4 h-20">
            <ArrowLeftIcon className="size-8 text-white cursor-pointer"/>
          </div>
          <div className="flex flex-col p-4 h-full">
            <div className="flex flex-col h-5/6 items-center justify-center">
              <ChoiceDesign />
            </div>
            <div className="flex flex-col w-full h-1/6 items-center gap-6">
              <div>
                <span className="text-white text-R-20">이대로 진행할까요?</span>
              </div>
              <div className="flex w-full justify-center">
                <CustomButton size="mediumLarge" rounded={true} className="bg-main02">
                    확인
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
    )
};

export default Page;