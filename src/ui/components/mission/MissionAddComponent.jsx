'use client'
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputDateBox from "@/src/ui/components/atoms/InputDateBox";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";
import ButtonGroup from "@/src/ui/components/mission/ButtonGroup";


export default function MissionAddComponent({setIsModalOpen}) {

    const AddAndCloseModal = () => {
        alert('미션이 등록 되었습니다!')
        setIsModalOpen(false);
    }

    return (
        <div className="flex flex-col w-full overflow-hidden justify-center items-center p-10 gap-2">
            <div className="w-full flex flex-col text-B-22">
                미션 등록하기
            </div>
            <div className="flex flex-col overflow-y-auto scrollbar-hide gap-3">
                <div className="flex flex-col gap-1">
                    <div className="text-R-14">
                        미션명
                    </div>
                    <div>
                        <InputTextBox placeholder="ex) 우리아이 도전 미션" />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-R-14">
                        미션 완료 방법
                    </div>
                    <div>
                        <InputTextBox height={150} placeholder="ex) 사진 인증" />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-R-14">
                        미션 완료 시 수령 금액
                    </div>
                    <div>
                        <InputTextBox placeholder="ex) 10,000" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <InputDateBox />
                </div>

            </div>
            <div className="flex flex-col w-full gap-2">
                <ButtonGroup />
                <div className="flex flex-row">
                    <CustomButton size="mediumLarge" rounded={true} onClick={AddAndCloseModal} >
                        미션 등록
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}