import CustomButton from "@/src/ui/components/atoms/CustomButton";
import Header from "@/src/ui/layout/Header";
import { assigndata } from "@/src/constants/assign";
import { PersonIcon, Pencil1Icon } from "@radix-ui/react-icons";
import Image from "next/image";

const imgSrc = {
  1 : "chachapingImg",
  2 : "dadapingImg",
  3 : "gogopingImg",
  4 : "hachupingImg",
  5 : "lalapingImg",
  6 : "happingImg"
}

export default function Page() {

  return (
    <div className="flex flex-col h-screen max-w-full overflow-auto scrollbar-hide">
      <Header />
      <div className="flex flex-col p-9">
        <div className="flex flex-col w-full pt-3 h-[384px] rounded-lg bg-main03">
          <div className="flex flex-col p-12 gap-5">
            <div className="flex text-white text-R-14 justify-center">
              위키즈와 함께하는
            </div>
            <div className="flex justify-center text-B-28 text-white">
              위키즈 체크카드
            </div>
            <div className="flex text-white text-R-14 justify-center">
              실적한도 제한 없이 어쩌고 저쩌고 <br /> 위키즈 카드에 대한 설명
            </div>
              <div className="flex flex-row justify-between px-9">
                <Image 
                src="/images/familyImg.svg" 
                alt="family" 
                width={25} 
                height={25} />
                <div className="h-8 border-l-2 border-white"></div>
                <Image 
                src="/images/busImg.svg" 
                alt="bus" 
                width={25} 
                height={25}  />
                <div className="h-8 border-l-2 border-white"></div>
                <Pencil1Icon 
                className="w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-row w-full justify-between">
            {Object.values(imgSrc).map((img, idx) => (
                <Image 
                key={idx} 
                src={`/images/${img}.svg`} 
                alt={`${img}`} 
                width={54} 
                height={54}/>
            ))}
            </div>  
          </div>
          <div className="flex my-8 justify-center">
            <CustomButton 
            size="mediumLarge" 
            rounded={true} 
            className="text-R-20 border border-1 border-black">
              체크카드 신청하기
            </CustomButton>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex text-B-20 text-black">
              쓸 때마다 캐시백,<br /> 주말에는 2배!
            </div>
          <div className="flex flex-col text-R-10 text-black/40 gap-2">
            {assigndata.map((item, idx) => (
              <div key={idx}>{item}</div>
              ))}
          </div>    
        </div>
      </div>
    </div>
  );
}
