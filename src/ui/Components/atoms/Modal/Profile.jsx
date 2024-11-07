// Profile.js
import useAccountInfoStore from "@/src/stores/useAccountInfoStore";
import Image from "next/image";
import { characterInfoMap } from "../../../../util/characterInfo"; // 상대 경로로 불러오기
// import { characterInfoMap } from "@/utils/characterInfo"; // 절대 경로 사용

const PROFILE_DEFAULT = {
  width: "w-[60px]",
  height: "h-[60px]",
  bgColor: "bg-white",
  borderColor: "border-2 border-gray-200",
  imagePath: "/images/Avatar.svg",
  radius: "rounded-full",
};

const Profile = ({ accountInfo, onClick }) => {
  const { setSelectedAccount } = useAccountInfoStore(); // Zustand에서 setSelectedAccount 가져오기

  const handleClick = () => {
    console.log("hello");

    setSelectedAccount(accountInfo); // 클릭 시 상태 업데이트
  };
  const characterInfo = characterInfoMap[accountInfo.designType] || {}; // designType에 맞는 캐릭터 정보 찾기

  return (
    <div
      onClick={onClick}
      className={`
        ${PROFILE_DEFAULT.width}
        ${PROFILE_DEFAULT.height}
        ${PROFILE_DEFAULT.bgColor}
        ${PROFILE_DEFAULT.borderColor}
        ${PROFILE_DEFAULT.radius}
        rounded-full
        overflow-hidden
        relative
      `}
    >
      <Image
        src={characterInfo.imagePath || PROFILE_DEFAULT.imagePath} // designType에 맞는 이미지 경로
        alt={characterInfo.name || "profile image"}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Profile;
