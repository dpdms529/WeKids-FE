import InnerText from "@/src/ui/components/card/InnerText";
import Image from "next/image";
import CustomButton from "@/src/ui/components/atoms/CustomButton";

export default function CardRequestReview({
  src="/images/chachapingImg.svg",
  children
}){
    return(
      <>
        <div className="flex flex-col h-4/5 justify-end ">
          <div className="flex flex-row border-2 border-black rounded-xl w-2/3 h-1/2 ml-auto mr-10">
            {children}
          </div>
          <div className="flex flex-col pb-28">
            <Image
              src={src}
              alt="character image"
              width={150}
              height={150}
            />
          </div> 
        </div>
        <div className="flex flex-col h-1/5 justify-center px-10">
          <CustomButton rounded={true} className="max-w-full">
            확인
          </CustomButton>
        </div>
      </>
    )
}