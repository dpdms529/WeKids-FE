import Image from "next/image";
import Link from "next/link";

const EmptyAccountCard = () => {
  return (
    <div className="w-[332px] h-[299px] flex flex-col items-center p-[20px] space-y-3 rounded-[13px] bg-main02">
      <div className="w-full">
        <p>등록된 계좌가 없습니다!</p>
        <p>계좌를 먼저 등록해주세요!</p>
      </div>
      <Link
        href="/parent/account"
        className="flex flex-col items-center bg-white w-[285px] h-[121px] rounded-[10px]"
      >
        <Image src="/images/favicon.svg" alt="파비콘" width={78} height={52} />
        <p>계좌 가져오기</p>
      </Link>
      <div className="w-[282px] h-[58px] border">티니핑들 이미지</div>
    </div>
  );
};

export default EmptyAccountCard;
