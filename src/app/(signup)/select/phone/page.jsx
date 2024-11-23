'use client'

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";


export default function Page() {
    const router = useRouter();
    return (
        <div className="flex flex-col h-screen w-[393px]">
            <Image
            src="/images/passImg.svg"
            alt="pass 사진"
            fill className="object-cover"
            onClick={() => {router.push(urlPath.SIGNUP_SELF);}}
            />
        </div>
    );
}