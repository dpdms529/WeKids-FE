import SignUpFooter from "@/src/ui/components/signup/SignUpFooter";
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import IdentificationBox from "@/src/ui/components/signup/IdentificationBox";
import toast, { Toaster } from "react-hot-toast";
import { validationMessages } from "@/src/constants/assign";
import { agreeAccountInquiry } from "@/src/apis/parents";

export default function Identification({ setIsChecked }) {
  const [assignCheck, setAssignChecked] = useState(false);
  const [identificationCheck, setIdentificationCheck] = useState(false);
  const [errorCode, setErrorCode] = useState([true, true, true]);
  const [identification, setIdentification] = useState("".padStart(13, " "));

  const notify = () => {
    if (!errorCode[0]) {
      toast(validationMessages[1]);
    }
    if (!errorCode[1]) {
      toast(validationMessages[2]);
    }
    if (!errorCode[2]) {
      toast(validationMessages[3]);
    }
    if (!assignCheck) {
      toast(validationMessages[4]);
    }
  };

  const handleCheck = async () => {
    const isAgreed = await agreeAccountInquiry(identification);
    setIsChecked(isAgreed === true);
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col w-full h-full justify-around py-[40px] scrollbar-hide">
        <div className="flex flex-col w-full h-[540px] px-[40px] items-center">
          <div className="text-R-20 mb-[30px]">
            계좌를 불러오기 위해서는 <br />
            주민등록 번호가 필요해요!
          </div>
          <div className="w-full h-full overflow-y-scroll scrollbar-hide space-y-[40px] mb-[40px]">
            <IdentificationBox
              setChecked={setIdentificationCheck}
              setErrorCode={setErrorCode}
              identification={identification}
              setIdentification={setIdentification}
            />
            <SignUpFooter setAllChecked={setAssignChecked} />
          </div>
        </div>
      <div className="mt-auto">
      <CustomButton
          onClick={() => {
            if (!(assignCheck && identificationCheck)) {
              notify();
            } else {
              handleCheck();
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
