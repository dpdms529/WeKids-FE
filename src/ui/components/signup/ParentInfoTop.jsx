"use client";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import BirthButton from "@/src/ui/components/signup/BirthButton";
import LimitedInputBox from "@/src/ui/components/signup/LimitedInputBox";
import { useState, useEffect } from "react";
import { year, month, date } from "@/src/constants/assign";
import Modal from "@/src/ui/components/atoms/Modal";
import CharacterCard from "@/src/ui/components/atoms/CharacterCard";
import toast, {Toaster} from "react-hot-toast";

export default function ParentInfoTop() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("".padStart(8, " "));
  const [phone, setPhone] = useState("".padStart(11, " ")); // 부모 폰
  const [time, setTime] = useState(0);
  const [allCheck, setAllCheck] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setAllCheck(name != "" && !birth.includes(" ") && !phone.includes(" "));
  }, [name, birth, phone]);

  useEffect(() => {
    if (time <= 0) {
      if (time === 0 && isRequest) {
        setName("");
        setBirth("".padStart(8, " "));
        setPhone("".padStart(11, " "));
        setIsRequest(false);
        setIsOpen(false);
      }
      return;
    }
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const notify = () => {
    toast("빈칸을 채워주세요!");
  };

  const OnChangeBirthHandler = (value, type) => {
    const tempValue = String(value);
    const stringValue = tempValue.length == 1 ? "0" + tempValue : tempValue;
    let updatedDate;
    switch (type) {
      case 1:
        updatedDate = stringValue.padEnd(8, " ").slice(0, 4) + birth.slice(4);
        break;
      case 2:
        updatedDate =
          birth.slice(0, 4) +
          stringValue.padEnd(2, " ").slice(0, 2) +
          birth.slice(6);
        break;
      case 3:
        updatedDate =
          birth.slice(0, 6) + stringValue.padEnd(2, " ").slice(0, 2);
        break;
      default:
        break;
    }
    setBirth(updatedDate);
  };

  const OnChangePhoneHandler = (value, type) => {
    let phoneNumber;
    switch (type) {
      case 1:
        phoneNumber = value.padEnd(3, " ").slice(0, 3) + phone.slice(3);
        break;
      case 2:
        phoneNumber =
          phone.slice(0, 3) + value.padEnd(4, " ").slice(0, 4) + phone.slice(7);
        break;
      case 3:
        phoneNumber = phone.slice(0, 7) + value.padEnd(4, " ").slice(0, 4);
        break;
      default:
        break;
    }
    setPhone(phoneNumber);
  };

  const modalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Toaster position="top-center" />
      <div className="flex flex-col px-10 gap-4 h-2/3">
        <div className="text-R-20 text-black/80">
          만 14세 미만의 가입자는 <br />
          보호자의 동의가 필요해요.
        </div>
        <div className="text-R-14 text-main04">
          보호자에게 동의 요청 문자를 보내주세요.
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-R-20">법정 대리인 이름</div>
          <div className="flex w-full">
            <InputTextBox
              placeholder="이름을 입력하세요"
              text={name}
              onChange={setName}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-R-20">생년월일</div>
          <div className="flex flex-row gap-5 w-full">
            <BirthButton
              placeholder="년도"
              options={year}
              onChange={(e) => OnChangeBirthHandler(e, 1)}
            />
            <BirthButton
              placeholder="월"
              options={month}
              onChange={(e) => OnChangeBirthHandler(e, 2)}
            />
            <BirthButton
              placeholder="일"
              options={date}
              onChange={(e) => OnChangeBirthHandler(e, 3)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-R-20">법정 대리인 휴대폰 번호</div>
          <div className="flex flex-row gap-5 w-full">
            <LimitedInputBox
              placeholder="010"
              maxLength={3}
              text={phone.slice(0, 3).replace(/\s/g, "")}
              value={phone.slice(0, 3).replace(/\s/g, "")}
              onChange={(e) => OnChangePhoneHandler(e, 1)}
            />
            <LimitedInputBox
              placeholder="0000"
              maxLength={4}
              text={phone.slice(3, 7).replace(/\s/g, "")}
              value={phone.slice(3, 7).replace(/\s/g, "")}
              onChange={(e) => OnChangePhoneHandler(e, 2)}
            />
            <LimitedInputBox
              placeholder="0000"
              maxLength={4}
              text={phone.slice(7, 11).replace(/\s/g, "")}
              value={phone.slice(7, 11).replace(/\s/g, "")}
              onChange={(e) => OnChangePhoneHandler(e, 3)}
            />
          </div>
        </div>
        {isRequest ? (
          <>
            <div className="flex justify-center text-main03 text-R-14">
              {time}초 전까지 동의해야 해요.
            </div>
            <div className="flex flex-col items-center w-full">
              <CustomButton
                size="medium"
                rounded={true}
                onClick={() => setTime(100)}
              >
                재요청 하기
              </CustomButton>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="fixed w-full bottom-5 justify-center pt-10">
        <CustomButton
          color={allCheck ? "main" : "gray" }
          onClick={() => {
            if (isRequest) {
              modalHandler();
            } else if (allCheck) {
              setIsRequest(true); // 상태 업데이트
              setTime(100);
            } else{
              notify();
            }
          }}
        >
          {isRequest ? "동의 확인" : "동의 요청하기"}
        </CustomButton>
      </div>
      <Modal
        isOpen={isOpen}
        modalHandler={modalHandler}
        border="rounded-3xl"
        bottom="bottom-[170px]"
        width="w-[358px]"
        height="h-[443px]"
        deletebutton={true}
      >
        <CharacterCard
          imgHeight={150}
          imgWidth={150}
          radius="rounded-none"
          className="border-none"
        >
          <div className="text-white text-R-28">
            부모님 동의를 기다리고 <br /> 있어요!!
          </div>
        </CharacterCard>
      </Modal>
    </>
  );
}
