import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import { FileTextIcon } from "@radix-ui/react-icons";
import LimitedInputBox from "@/src/ui/components/signup/LimitedInputBox";
import React, { useState, useEffect } from "react";
import CustomButton from "@/src/ui/Components/atoms/CustomButton";

export default function ChildInputForm({setAllChecked}) {

  

  const [name, setName] = useState("");
  const [residentfront, setResidentfront] = useState("");
  const [residentback, setResidentback] = useState("");

  useEffect(() => {
    setAllChecked(name !== "" &&  residentfront.length == 6 && residentback.length == 7);
}, [name, residentfront, residentback]);

  const handleFrontChange = (value) => {
    setResidentfront(value.slice(0, 6));
  };
  
  const handleBackChange = (value) => { 
    
    setResidentback(value.slice(0, 7));
     
  };

    return (
        <div className="flex flex-col px-10 w-max-full pt-12 gap-7">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-start text-R-20 text-black/80">
              특정 금융정보법에 따라<br/> 아이의 기본 정보가 필요해요
            </div>
            <div>
              <InputTextBox placeholder={"이름"} value={name} onChange={setName}/>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-max-full">
            <div className="flex flex-row items-start text-R-20 text-black/80">
              자녀의 주민등록번호
            </div>
            <div className="flex flex-row w-full gap-2">
              <LimitedInputBox placeholder={"주민등록번호"}
                value={residentfront}
                text={residentfront}
                onChange={handleFrontChange} 
                security={false}
                className="w-full"
                maxLength={6}/>
              <div className="flex flex-col justify-center">-</div>
              <LimitedInputBox
                placeholder={""}
                value={residentback}
                text={residentback}
                onChange={handleBackChange}
                security={true}
                className="w-full"
              />
            </div>
            <div className="flex flex-col mt-3 gap-3">
              <div className="text-R-14 text-stone-300">000님이 000님의 <br /> 법정대리인이 맞는지 확인하기 위해 </div>
              <div className="text-R-20 text-black/80">가족관계증명서와 <br /> 기본증명서를 발급할게요 </div>
              <div>
                <FileTextIcon className="w-20 h-20"/>
              </div>
              <CustomButton 
              rounded="true" 
              className="w-full mt-3">
              발급하기
              </CustomButton>
            </div>
          </div>
        </div>
    );
}