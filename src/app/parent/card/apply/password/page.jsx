"use client";
import PasswordTop from "@/src/ui/components/signup/PasswordTop";
import Digit4PasswordButton from "@/src/ui/components/signup/Digit4PasswordButton";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query"; 
import { useCardStore } from "@/src/stores/cardStore";
import { useRouter } from "next/navigation";
import { urlPath } from "@/src/constants/common";

const queryClient = new QueryClient();

function Page() {
  const [isInput, setIsInput] = useState(Array(4).fill(false));
  const [pwd, setPwd] = useState("");
  const [allow, setAllowed] = useState(false);
  const router = useRouter();
  const { registerPassword } = useCardStore();

  const mutation = useMutation({
    mutationFn: async (password) => {
      return await registerPassword(password);
    },
    onSuccess: (data) => {
      router.push(urlPath.SELECT_PARENT_PASSWORD_CONFIRM);
    },
    onError: (error) => {
      console.error("비밀번호 등록 실패:", error);
    },
  });

  const handleSubmit = () => {
    if (allow) {
      mutation.mutate(pwd);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-[393px] bg-white overflow-auto">
      <PasswordTop
        isInput={isInput}
        pwd={pwd}
        setIsInput={setIsInput}
        setPwd={setPwd}
        setAllowed={setAllowed}
        index={4}
      />
      <Digit4PasswordButton
        pwd={pwd}
        isInput={isInput}
        allow={allow}
        setIsInput={setIsInput}
        setPwd={setPwd}
        setAllowed={setAllowed}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Page />
  </QueryClientProvider>
);

export default App;