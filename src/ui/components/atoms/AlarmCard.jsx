import { ChevronRightIcon, EnvelopeClosedIcon, CheckIcon, DocumentIcon, CardStackIcon, SpeakerLoudIcon } from '@radix-ui/react-icons';
import { alarmData } from '@/src/constants/assign';

const EMOTICON = {
    MESSAGE: EnvelopeClosedIcon,
    COMPLETED: CheckIcon,
    DOCUMENT: DocumentIcon,
    CARD: CardStackIcon,
    ANNOUNCEMENT: SpeakerLoudIcon,
};

const AlarmCard = ({
    case : number = 1 ,
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

  const data = alarmData[number];
  if(!data) return null;

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