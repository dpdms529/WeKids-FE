"use client";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import BirthButton from "@/src/ui/components/signup/BirthButton";
import LimitedInputBox from "@/src/ui/components/signup/LimitedInputBox";
import { useState, useEffect } from "react";
import { year, month, date } from "@/src/constants/assign";
import Modal from "@/src/ui/components/atoms/Modal";
import CharacterCard from "@/src/ui/components/atoms/CharacterCard";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";
import { useSignUpStore } from "@/src/stores/accountStore";
import SignIn from "../auth/SignIn";

export default function ParentInfoTop() {
  const {
    guardianName,
    guardianBirthday,
    guardianPhone,
    setGuardianName,
    setGuardianBirthday,
    setGuardianPhone,
  } = useSignUpStore();
  // const [name, setName] = useState("");
  // const [birth, setBirth] = useState("".padStart(8, " "));
  // const [phone, setPhone] = useState("".padStart(11, " ")); // 부모 폰
  const [time, setTime] = useState(0);
  const [allCheck, setAllCheck] = useState(false);
  const [isRequest, setIsRequest] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [blank, setBlank] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setAllCheck(
      guardianName != "" &&
        !guardianBirthday.includes(" ") &&
        !guardianPhone.includes(" "),
    );
  }, [guardianName, guardianBirthday, guardianPhone]);

  useEffect(() => {
    if (time <= 0) {
      if (time === 0 && isRequest) {
        setGuardianName("");
        setGuardianBirthday("".padStart(8, " "));
        setGuardianPhone("".padStart(11, " "));
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

  const OnChangeBirthHandler = (value, type) => {
    const tempValue = String(value);
    const stringValue = tempValue.length == 1 ? "0" + tempValue : tempValue;
    let updatedDate;
    switch (type) {
      case 1:
        updatedDate =
          stringValue.padEnd(8, " ").slice(0, 4) + guardianBirthday.slice(4);
        break;
      case 2:
        updatedDate =
          guardianBirthday.slice(0, 4) +
          stringValue.padEnd(2, " ").slice(0, 2) +
          guardianBirthday.slice(6);
        break;
      case 3:
        updatedDate =
          guardianBirthday.slice(0, 6) + stringValue.padEnd(2, " ").slice(0, 2);
        break;
      default:
        break;
    }
    setGuardianBirthday(updatedDate);
  };

  const OnChangePhoneHandler = (value, type) => {
    let phoneNumber;
    switch (type) {
      case 1:
        phoneNumber = value.padEnd(3, " ").slice(0, 3) + guardianPhone.slice(3);
        break;
      case 2:
        phoneNumber =
          guardianPhone.slice(0, 3) +
          value.padEnd(4, " ").slice(0, 4) +
          guardianPhone.slice(7);
        break;
      case 3:
        phoneNumber =
          guardianPhone.slice(0, 7) + value.padEnd(4, " ").slice(0, 4);
        break;
      default:
        break;
    }
    setGuardianPhone(phoneNumber);
  };

  const modalHandler = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      router.push(urlPath.HOME);
    }, 5000);
  };
  return (
    <>
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
              text={guardianName}
              onChange={setGuardianName}
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
              text={guardianPhone.slice(0, 3).replace(/\s/g, "")}
              value={guardianPhone.slice(0, 3).replace(/\s/g, "")}
              onChange={(e) => OnChangePhoneHandler(e, 1)}
            />
            <LimitedInputBox
              placeholder="0000"
              maxLength={4}
              text={guardianPhone.slice(3, 7).replace(/\s/g, "")}
              value={guardianPhone.slice(3, 7).replace(/\s/g, "")}
              onChange={(e) => OnChangePhoneHandler(e, 2)}
            />
            <LimitedInputBox
              placeholder="0000"
              maxLength={4}
              text={guardianPhone.slice(7, 11).replace(/\s/g, "")}
              value={guardianPhone.slice(7, 11).replace(/\s/g, "")}
              onChange={(e) => OnChangePhoneHandler(e, 3)}
            />
          </div>
        </div>
        {blank ? (
          <p className="mt-2 text-sm text-red-500">빈칸을 입력해주세요.</p>
        ) : (
          ""
        )}
        <div></div>
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
        {isRequest ? (
          <SignIn>
            <CustomButton
              color={allCheck ? "main" : "gray"}
              onClick={() => {
                modalHandler();
              }}
            >
              동의 확인
            </CustomButton>
          </SignIn>
        ) : (
          <CustomButton
            color={allCheck ? "main" : "gray"}
            onClick={() => {
              if (allCheck) {
                setBlank(false);
                setIsRequest(true); // 상태 업데이트
                setTime(100);
              } else {
                setBlank(true);
              }
            }}
          >
            동의 요청하기
          </CustomButton>
        )}
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
