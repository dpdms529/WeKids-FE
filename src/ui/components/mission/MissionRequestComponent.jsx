'use client'

import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const MissionRequestComponent = ({setIsModalOpen}) => {
    const [checked, setChecked] = useState(false);
 

  

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
  };
    return (
        <div className="flex flex-col w-full overflow-hidden justify-center items-center p-10">
            <div className="flex flex-row">
            <div className="flex flex-row text-B-22 mb-1">
                <div
                    className={`flex flex-row ${checked ? "border-black" : "border-stone-300"} border bg-black/10 rounded cursor-pointer`}
                    onClick={handleCheckboxChange}
                    >
                    {checked ? (
                    <CheckIcon className="text-black w-4 h-4" />
                    ) : (
                    <CheckIcon className="text-neutral-400 w-4 h-4" />
                    )}
                    </div>
                </div>
                <div>
                  미션명 미션명 미션명 미션명 미션명 미션명
                </div>
            </div>
           
        </div>
    );
}

export default MissionRequestComponent