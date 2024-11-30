'use client'
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";

export default function Page() {
    return (
        <div className="flex flex-col w-full h-screen overflow-auto justify-center items-center">
            <div>
                미션 등록하기
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div>
                        미션명
                    </div>
                    <div>
                        <InputTextBox />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        미션 완료 방법
                    </div>
                    <div>
                        <InputTextBox />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        미션 완료 시 수령 금액
                    </div>
                    <div>
                        <InputTextBox />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        미션 완료일
                    </div>
                    <div>
                        <InputTextBox />
                    </div>
                </div>

            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">

                </div>
                <div className="flex flex-row">
                    <CustomButton size="mediumLarge" rounded={true} />
                </div>
            </div>
        </div>
    );
}