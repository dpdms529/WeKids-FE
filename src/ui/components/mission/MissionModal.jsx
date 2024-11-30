import React from "react";

const MissionModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="absolute bg-white w-[393px] h-[648px] pb-4 rounded-lg shadow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black"
        >
          ✖
        </button>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MissionModal;
