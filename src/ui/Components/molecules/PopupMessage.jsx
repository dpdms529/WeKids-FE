import CustomButton from "../atoms/CustomButton";

const PopupMessage = ({
  isOpen,
  title = "제목",
  message = "문구",
  buttonText = "확인",
  onClose,
  width = "375px",
  height = "208px",
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? "bg-black bg-opacity-40" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="bg-white rounded-xl shadow-lg relative"
        style={{ width, height }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-3 text-neutral-400 hover:text-gray-400"
        >
          ×
        </button>

        {/* Content container */}
        <div className="p-6 flex flex-col h-full justify-center items-center text-center">
          {/* Title */}
          <h2 className="text-R-20">{title}</h2>

          {/* Message */}
          <p className="p-5 text-R-14">{message}</p>

          <CustomButton
            size="mediumLarge"
            rounded={true}
            onClick={onClose}
            className="w-full rounded-md mt-4 border border-black"
          >
            {buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;
