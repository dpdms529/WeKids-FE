import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Page() {
    return (
      <div className="flex flex-col w-full h-screen overflow-auto">
        <div className="flex flex-col w-full">
          <div className="flex flex-row px-7 py-14 w-full">
            <ArrowLeftIcon />
            <div className="flex text-R-14 justify-center w-full">
              네이버로 가입하기
            </div>
          </div>
          <div className="flex flex-col p-8 gap-8">
            <div>
              만 14세 미만의 가입자는 <br />
              보호자의 동의가 필요해요.
            </div>
            <div>
              보호자에게 동의 요청 문자를 보내주세요.
            </div>
          </div>
          
                
        </div>
      </div>
    );
}