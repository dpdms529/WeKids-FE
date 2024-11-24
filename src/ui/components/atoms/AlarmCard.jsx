import { ChevronRightIcon, EnvelopeClosedIcon, CheckIcon, DocumentIcon, CardStackIcon, SpeakerLoudIcon } from '@radix-ui/react-icons';

const EMOTICON = {
    MESSAGE: EnvelopeClosedIcon,
    COMPLETED: CheckIcon,
    DOCUMENT: DocumentIcon,
    CARD: CardStackIcon,
    ANNOUNCEMENT: SpeakerLoudIcon,
};

const alarmData = [
  {
      emoticon: "COMPLETED",
      title: "완료 미션 바로 보기",
      description: `미션을 확인해보세요. <br/>아이가 XX미션을 완료했습니다.`,
        },
  {
      emoticon: "CARD",
      title: "등록된 카드 디자인 확인하기",
      description: `아이가 만든 카드 디자인을 확인하고 카드를 발행해주세요!`,
  },
  {
      emoticon: "DOCUMENT",
      title: "협상 제안서 바로 보기",
      description: `용돈 협상 제안서를 확인해보세요. <br/>아이가 용돈 협상 제안서를 등록했습니다!`,
  },
  {
      emoticon: "ANNOUNCEMENT",
      title: "휴일에도 자동이체가 가능합니다!",
      description: `2024년 10월 7일부터 휴일에도 자동이체가 가능해요!`,
  },
  {
      emoticon: "MESSAGE",
      title: "부모 동의 알림 확인하기",
      description: `가족관계 증명서 확인해주기. <br/>아이가 소셜로그인 가입을 위한 부모 동의 알림을 보냈습니다!`,
  },
];

const AlarmCard = ({
    width = "w-full",
    height = "h-[513px]",
    radius = "",
    border = "",
    emoticon="MESSAGE",
    title = "완료 미션 바로 보기",
    description = `미션을 확인해보세요. <br/>아이가 XX미션을 완료했습니다.`,
    date = "11월 21일",
    className
}) => {
    const SelectedIcon = EMOTICON[emoticon];
    return (
      <div className={`flex flex-row ${width} ${height} ${radius} ${border} bg-main03 h-[149px] p-6 gap-5 ${className}`}>
        <div className="flex items-start">
          {SelectedIcon && <SelectedIcon className="w-[23px] h-[23px]" />} 
        </div>
        <div className="flex flex-col gap-3 w-3/4">
          <div className="text-B-18 text-black">{title}</div>
          <div className="text-R-14 text-black/60">{description.split("<br/>").map((line, index) => (
                <p key={index}>{line}</p>
            ))}</div>
          <div className="text-R-10 text-black/40">{date}</div>
        </div>
        <div className="flex w-1/4 items-center justify-end">
              <ChevronRightIcon className="w-[43px] h-[43px] cursor-pointer" />
        </div>
            
            
        </div>
    );
}

export default AlarmCard;