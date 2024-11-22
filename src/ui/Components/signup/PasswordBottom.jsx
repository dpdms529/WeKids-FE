import CustomButton from "@/src/ui/Components/atoms/CustomButton";
import KeyPad from "@/src/ui/Components/atoms/KeyPad";

export default function Page({pwd, isInput, allow, setIsInput, setPwd, setAllowed}) {
    const inputHandler = (num) => {
        if(num === "⌫"){
            const updateInput = [...isInput];
            const index = updateInput.lastIndexOf(true);
            if (index != -1) {
                updateInput[index] = false;
            }
            setIsInput(updateInput);
            setAllowed(false);
            pwd.length != 6 ? setPwd(pwd.slice(0, -1)) : "";
        }
        else if(num != "") {
            const updateInput = [...isInput];
            const index = updateInput.indexOf(false);
            if (index != -1) {
                updateInput[index] = true;
            }
            setIsInput(updateInput);
            pwd.length != 12 ? setPwd(pwd + num) : "";
        }
        
    }
    return (
        <>
        <div className="flex flex-col h-1/5 p-10 ">
                    <CustomButton rounded = "true" 
                    className={`mt-auto w-full ${allow  ? "bg-main02" : "bg-stone-300 hover:bg-stone-300 pointer-events-none"}`}
                    disabled={!allow}
                    onClick={() => {
                        if (allow) {
                            router.push(urlPath.HOME);
                        }
                    }}>
                        확인
                    </ CustomButton>
                </div>
            <div className="flex flex-col mt-auto w-[393px]">
                <KeyPad isDoubleButton={false} number={inputHandler}/>
            </div>
        </>
    );
}