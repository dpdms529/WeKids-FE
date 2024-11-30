'use client'

import { useState } from "react";
import CustomButton from "../atoms/CustomButton";
import { CheckIcon } from "@radix-ui/react-icons";

  const data ={ 1 :"미션 설명이 들어갑니다. 미션 설명은 총 몇 자 인가요? 넓이 영역에 대해 한번 고려 해보셔야 할 것 같습니다. 보통 설명이 이렇게까지 길어지는 일이 있을지는 잘 모르겠습니다. 부모님이 자식에게 이 만큼 설명하는 것이 아이 연령을 고려했을 때 불필요한 일일 수도 있습니다만 저희는 최대 길이 영역을 고려하여 디자인 진행을 해야합니다",
    2 : "미션 성공 시 총 30,000원을 받을 수 있어요 💙",
    3: "🍪 2024년 11월 20일 (수) 까지 완료할 수 있어요"
  }


  const MissionAcceptComponent = ({setIsModalOpen,  setFile}) => {
    const [checked, setChecked] = useState(false);

    const AddAndCloseModal = () => {

        setIsModalOpen(false);
      };

      


    const handleCheckboxChange = () => {
      const newChecked = !checked;
      setChecked(newChecked);
    };
      return (
          <div className="flex flex-col w-full overflow-hidden justify-center items-center p-10">
            <div className = "priveiw-rapping">
            </div>
              <div className="flex flex-row gap-1 mb-5 w-full">
                <div className="flex flex-row text-B-22 mb-1">
                  <div
                      className={`flex flex-row bg-main03 rounded cursor-pointer items-center w-4 h-4 justify-center mt-1`}
                      onClick={handleCheckboxChange}
                      >
                      {checked ? (
                      <CheckIcon className="text-black w-4 h-4" />
                      ) : (
                      <CheckIcon className="text-white w-4 h-4" />
                      )}
                  </div>
                  </div>
                  <div>
                    미션명~~~~~~~~~~~~
                  </div>
              </div>
            <div className="flex flex-col w-full gap-2 mb-3 ">
              
              <div className="flex flex-row mt-1">

              <CustomButton
                size="mediumLarge"
                rounded={true}
                onClick={AddAndCloseModal}
                className="text-R-18"
              >
                💙 미 션 완 료 💙
              </CustomButton>
              </div>
            </div>

          </div>
      );
  }

  export default MissionAcceptComponent;