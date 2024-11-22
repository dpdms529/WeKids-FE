export default function ParentChildSelector({
    isSelected = true, 
    children,
    onClick = () => {},  
    width = "w-full", 
    height="h-20", 
    selectedColor = "bg-main04 bg-opacity-50",
    className }) {

return(
            <div className={`rounded-xl 
            ${isSelected ? `border-black ${selectedColor} shadow-xl` : "border-neutral-400 bg-white"} 
            ${width} 
            ${height} border-2 my-7 cursor-pointer`}>
                    <div className="flex flex-row"onClick={onClick}>
                            {children}      
                    </div>
            </div>
    )

}