import SignUpFooter from "@/src/ui/components/signup/SignUpFooter";
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import IdentificationBox from "@/src/ui/components/signup/IdentificationBox";
import toast, { Toaster } from "react-hot-toast";
import { validationMessages } from "@/src/constants/assign";

export default function Identification({ setIsChecked }) {
  const [assignCheck, setAssignChecked] = useState(false);
  const [identificationCheck, setIdentificationCheck] = useState(false);
  const [errorCode, setErrorCode] = useState([true, true, true]);

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

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col overflow-y-hidden h-screen">
        <div className="flex flex-col w-full h-4/5 items-center overflow-auto pt-12">
          <div className="text-R-20 px-12 h-1/5">
            계좌를 불러오기 위해서는 <br />
            주민등록 번호가 필요해요!
          </div>
          <div className="flex flex-col gap-11 px-12 mt-11 h-2/5">
            <IdentificationBox
              setChecked={setIdentificationCheck}
              setErrorCode={setErrorCode}
            />
          </div>
          <div className="flex flex-col w-full h-2/5">
            <SignUpFooter setAllChecked={setAssignChecked} />
          </div>
        </div>
        <div className="flex flex-col h-1/5">
          <div className="">
            <CustomButton
              onClick={() => {
                if (!(assignCheck && identificationCheck)) {
                  notify();
                } else {
                  setIsChecked(true);
                }
              }}
              color={assignCheck && identificationCheck ? "main" : "gray"}
            >
              확인
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
}
