const CharacterCard = ({
    width = "w-full",
    height = "h-[513px]",
    radius = "rounded-[10px]",
    border = "border-black"
}) => {
    return (
        <div className={`flex flex-col bg-main02 gap-12 ${height} ${width} ${border} ${radius} border-2`}>
            
            <div className="flex flex-col items-center justify-end h-3/5 bottom-0">
                <img src="/images/하츄핑.png"></img>
            </div>
            <div className="flex flex-col items-center gap-4 h-2/5">
                <span className="text-white text-B-28">가족 관계 확인 중입니다.</span>
                <span className="text-white text-R-14">2분 정도 걸릴 수 있어요.</span>
            </div>
            
        </div>
    );
}

export default CharacterCard;