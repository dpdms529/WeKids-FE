import { urlPath } from "@/src/constants/common";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import KeyPad from "@/src/ui/components/atoms/KeyPad";
import Link from "next/link";

export default function Page({ pwd, isInput, allow, setIsInput, setPwd, setAllowed }) {
  const inputHandler = (num) => {
    if (num === "⌫") {
      const updateInput = [...isInput];
      const index = updateInput.lastIndexOf(true);
      if (index != -1) {
        updateInput[index] = false;
      }
      setIsInput(updateInput);
      setAllowed(false);
      pwd.length != 6 ? setPwd(pwd.slice(0, -1)) : "";
    } else if (num != "") {
      const updateInput = [...isInput];
      const index = updateInput.indexOf(false);
      if (index != -1) {
        updateInput[index] = true;
      }
      setIsInput(updateInput);
      pwd.length != 12 ? setPwd(pwd + num) : "";
    }
  };

  const handleClick = (e) => {
    if (!allow) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="flex flex-col h-1/5 p-10">
        <Link href={urlPath.SELECT_PARENT_PASSWORD_CONFIRM} onClick={handleClick}>
          <CustomButton
            rounded="true"
            className={`mt-auto w-full ${
              allow ? "bg-main02" : "bg-stone-300 hover:bg-stone-300 pointer-events-none"
            }`}
          >
            확인
          </CustomButton>
        </Link>
      </div>
      <div className="flex flex-col mt-auto w-[393px]">
        <KeyPad isDoubleButton={false} number={inputHandler} />
      </div>
    </>
  );
}
