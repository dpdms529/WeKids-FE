export default function Modal({
    isOpen,
    modalHandler,
    children,
    width = "w-[393px]",
    height = "h-[443px]",
    bottom = "bottom-0",
    deletebutton = false,
    border = "rounded-t-3xl",
    buttoncolor = "text-gray-500",
    buttonisLeft = "true",
  }) {
    if (!isOpen) return null;
    return (
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center z-50"
        onClick={modalHandler}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white ${border} transform transition-transform duration-500 ease-in-out ${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          } absolute ${bottom} ${width} ${height}`}
        >
          <div
            className={`fixed ${buttonisLeft ? "top-[19px] left-[19px]" : "top-[19px] right-[19px]"}`}
          >
            {deletebutton && (
              <button
                onClick={modalHandler}
                className={`${buttoncolor} text-R-14`}
              >
                ✕
              </button>
            )}
          </div>
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      </div>
    );
  }