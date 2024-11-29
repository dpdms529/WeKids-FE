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
      console.log(validationMessages[1]);
    }
    if (!errorCode[1]) {
      toast(validationMessages[2]);
      console.log("2");
    }
    if (!errorCode[2]) {
      toast(validationMessages[3]);
      console.log("3");
    }
    if (!assignCheck) {
      toast(validationMessages[4]);
      console.log(validationMessages[4]);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col w-full h-2/5 items-center pt-12">
        <div className="text-R-20  px-12">
          계좌를 불러오기 위해서는 <br />
          주민등록 번호가 필요해요!
        </div>
        <div className="flex flex-col gap-11 px-12 mt-11">
          <IdentificationBox
            setChecked={setIdentificationCheck}
            setErrorCode={setErrorCode}
          />
        </div>
        <div className="flex flex-col my-12 w-full">
          <SignUpFooter setAllChecked={setAssignChecked} />
        </div>
      </div>
      <div className="flex flex-col h-3/5">
        <div className="fixed bottom-0">
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
    </>
  );
}
