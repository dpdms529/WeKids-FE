const CharacterCard = ({
    
}) => {
    return (
        <div className={`flex flex-col bg-main02 gap-4 h-[513px] `}>
            <div>

            </div>
            <div className="flex flex-col items-center h-[180px] mt-[110px]">
                <img className="size-[180px]" src="/images/하츄핑.png"></img>
            </div>
            <div className="flex flex-col items-center gap-4 h-1/3">
                <span className="text-white text-B-28">가족 관계 확인 중입니다.</span>
                <span className="text-white text-R-14">2분 정도 걸릴 수 있어요.</span>
            </div>
        </div>
    );
}

export default CharacterCard;