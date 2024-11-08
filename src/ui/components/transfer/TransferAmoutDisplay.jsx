import React, { useEffect } from 'react';
import {urlPath} from '@/src/constants/common';
import { useRouter } from "next/navigation";
import { Box } from "@radix-ui/themes";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const dummyData = [
    { id: 1, name: '구자빈', account: '111-111-111', bank: '우리은행' },
    { id: 2, name: '강현우', account: '222-222-222', bank: '우리은행' },
    { id: 3, name: '안찬웅', account: '333-333-333', bank: '우리은행' },
    { id: 4, name: '조예은', account: '444-444-444', bank: '우리은행' },
    { id: 5, name: '최윤정', account: '555-555-555', bank: '우리은행' },
];

const TransferAmountDisplay = ({ 
    selectedAccount, 
    transferAmount, 
    clearTransferData,
    sendUser, 
    isShaking, 
    handleUserChange, 
}) => {
    useEffect(() => {
        if (!selectedAccount) {
            router.back();
        }
    }, [selectedAccount]);
    
    const router = useRouter();

    const btnHandler = (action) => {
        clearTransferData();
        setTimeout(() => {
            if (action === 'back') {
                router.back();
            } else if (action === 'cancel') {
                router.push(urlPath.ACCOUNT_LIST);
            }
        }, 0);
    };

    return (
        <div className="flex flex-col items-center w-full p-4 absolute h-3/5">
            <div className="flex justify-between items-center w-full mb-4">
            <Box onClick={() => btnHandler("back")}>
          <ArrowLeftIcon className="w-5 h-5 text-black cursor-pointer" />
            </Box>
                <div className="text-center">
                    <div>
                        <select
                            className="bg-gray-100 cursor-pointer"
                            value={selectedAccount.name}
                            onChange={handleUserChange}
                        >
                            {dummyData.map((user, index) => (
                                <option key={index} value={user.name}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="text-xs text-gray-500">
                        {"우리은행"} {selectedAccount.account}
                    </div>
                </div>
                <button className="text-lg" onClick={() => btnHandler("cancel")}>취소</button>
            </div>
            <div className="flex flex-col items-center justify-center h-1/2 mt-8">
                <div className={`text-4xl font-bold ${isShaking ? 'text-red-600 shake-animation' : 'text-slate-900'}`}>
                    {transferAmount.toLocaleString()}원
                </div>
                <div className="text-red-600 mt-2">
                    {isShaking && `${sendUser.balance.toLocaleString()}원 까지만 이체 가능합니다.`}
                </div>
            </div>
        </div>
    );
};

export default TransferAmountDisplay;
