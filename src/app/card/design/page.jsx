import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const Page = () => {
    return(
        <div className="flex flex-col h-screen max-w-full overflow-hidden bg-main01">
            <div className="flex p-4 h-20">
                <ArrowLeftIcon className="size-8 text-white cursor-pointer"/>
            </div>
            <div className="flex flex-col p-4 h-full">
                
            </div>
        </div>
    )
};

export default Page;