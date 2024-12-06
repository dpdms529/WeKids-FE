"use client";

import { useEffect } from "react";
import CustomButton from "../ui/components/atoms/CustomButton";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-between p-5">
      <h2 className="text-xl">Something went wrong!</h2>
      <CustomButton size="medium" onClick={() => reset()}>
        Try again
      </CustomButton>
    </div>
  );
}
