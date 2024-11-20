import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Page() {
    return (
        <div className="flex flex-col bg-white overflow-hidden h-screen max-w-[393px]">
            <div className="flex flex-col p-[40px] h-full">
                <div className="flex flex-col gap-[26px] h-5/6 justify-center items-center">
                    <div>
                        <div className="flex rounded-full w-[55px] h-[55px] bg-main02 justify-center items-center">
                            <CheckIcon className="flex w-[49px] h-[43px] text-white "/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}