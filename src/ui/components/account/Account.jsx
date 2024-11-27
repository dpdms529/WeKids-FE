import { urlPath } from "@/src/constants/common";
import AccountItem from "@/src/ui/components/signup/AccountItem";
import { useState } from "react";
import CustomButton from "@/src/ui/components/atoms/CustomButton";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from "next/link";

const fetchData = async () => {
  const response = await axios.get("http://localhost:8080/api/v1/accounts/baas", {
    withCredentials: true, // 쿠키 전송 활성화
  });
  return response.data;
};

export default function Account() {

  

  // useQuery를 사용해 동적 URL 데이터 가져오기
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["accounts"], // 쿼리 키
    queryFn: fetchData,     // 데이터 가져오는 함수
  });
  console.log(data);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const clickHandler = (e) => {
    if (selectedIndex == null) {
      e.preventDefault();
    }
  };


  return (
    <>
      <div className="flex flex-col overflow-y-auto h-5/6">

    
      <AccountItem
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      
      </div>
      <div className="flex items-center ">
        <Link href={urlPath.HOME} onClick={clickHandler}>
          <CustomButton color={selectedIndex ? "main" : "gray"}>
            가져오기
          </CustomButton>
        </Link>
      </div>
    </>
  );
}
