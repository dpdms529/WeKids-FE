import SignUpFooter from "@/src/ui/components/signup/SignUpFooter";
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import IdentificationBox from "@/src/ui/components/signup/IdentificationBox";
import toast, { Toaster } from "react-hot-toast";


export default function Identification({setIsChecked}) {

    const [assignCheck, setAssignChecked] = useState(false);
  const [identificationCheck, setIdentificationCheck] = useState(false);

  const notify = () => {
    toast("빈칸을 채워주세요!");
  };
    return (
        <>
        <Toaster position="top-center" />
        <div className="flex flex-col w-full h-[423px] items-center px-12 pt-12">
        <div className="text-R-20">
          계좌를 불러오기 위해서는 <br />
          주민등록 번호가 필요해요!
        </div>
        <div className="flex flex-col gap-11 mt-11">
          <IdentificationBox setChecked={setIdentificationCheck} />
        </div>
      </div>
      <div className="flex flex-col h-[487px]">
        <div className="flex flex-col my-12">
          <SignUpFooter setAllChecked={setAssignChecked} />
        </div>
        <div className="fixed bottom-0">
          <CustomButton
            onClick={() => {
              if (!(assignCheck && identificationCheck)) {
                notify();
              }
              else{
                setIsChecked(true);
              }
            }}
            color={assignCheck && identificationCheck ? "main" : "gray"}
          >
            확인
          </CustomButton>
        </div>
      </div>
      </>
    );
}