"use client";
import PopupMessage from "@/src/ui/Components/molecules/PopupMessage";
import { useState } from "react";

const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-white">
      {isPopupOpen && (
        <PopupMessage
          isOpen={isPopupOpen}
          onButtonClick={handleClose}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Page;
