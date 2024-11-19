const CharacterCard = ({
    width = "w-full",
    height = "h-[513px]",
    radius = "rounded-[10px]",
    border = "border-black",
    children
}) => {
    return (
        <div className={`flex flex-col bg-main02 gap-12 ${height} ${width} ${border} ${radius} border-2`}>
            
            <div className="flex flex-col items-center justify-end h-3/5 bottom-0">
                <img src="/images/하츄핑.png"></img>
            </div>
            <div className="flex flex-col items-center gap-4 h-2/5">
                {children}
            </div>
            
        </div>
    );
}

export default CharacterCard;