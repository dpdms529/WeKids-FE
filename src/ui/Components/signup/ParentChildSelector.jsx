export default function ParentChildSelector({
    isSelected = true, 
    children,
    onClick,  
    width = "w-full", 
    height="h-20", 
    selectedColor = "bg-main04 bg-opacity-50",
    bordercolor = "border-black",
    className }) {

return(
            <div className={`rounded-xl 
            ${isSelected ? `${bordercolor} ${selectedColor} shadow-xl` : "border-neutral-400 bg-white"} 
            ${width} 
            ${height} border-2 my-7 cursor-pointer ${className}`}>
                    <div className="flex flex-row"onClick={onClick}>
                            {children}      
                    </div>
            </div>
    )

}