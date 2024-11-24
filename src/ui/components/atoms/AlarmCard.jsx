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
    missionName = "설거지 미션",
    width = "w-full",
    height = "h-[513px]",
    radius = "",
    border = "",
    date = "11월 21일",
    className
}) => {

  const data = alarmData[number];
  if(!data) return null;

    const SelectedIcon = EMOTICON[data.emoticon];
    return (
      <div className={`flex flex-row ${width} ${height} ${radius} ${border} bg-main03 h-[149px] p-6 gap-5 ${className}`}>
        <div className="flex items-start">
          {SelectedIcon && <SelectedIcon className="w-[23px] h-[23px]" />} 
        </div>
        <div className="flex flex-col gap-3 w-3/4">
          <div className="text-B-18 text-black">{data.title}</div>
          <div className="text-R-14 text-black/60">{data.description(missionName).split("<br/>").map((line, index) => (
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