import { CheckIcon } from "@radix-ui/react-icons";
export default function ConfirmItem() {
  return (
    <>
      <div>
        <div className="flex rounded-full w-14 h-14 bg-main02 justify-center items-center">
          <CheckIcon className="flex w-12 h-11 text-white " />
        </div>
      </div>
      <div>
        <span className="text-R-20">간편 비밀번호가 등록 되었어요.</span>
      </div>
    </>
  );
}
