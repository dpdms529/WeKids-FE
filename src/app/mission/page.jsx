'use client'
import InputTextBox from "@/src/ui/components/atoms/InputTextBox";

export default function Page() {
    return (
        <div className="flex flex-col w-full h-screen overflow-auto">
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

            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">

                </div>
                <div className="flex flex-row">

                </div>
            </div>
        </div>
    );
}