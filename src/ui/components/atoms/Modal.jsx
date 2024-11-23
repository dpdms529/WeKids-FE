export default function Modal({
  isOpen,
  modalHandler,
  children,
  width = "30%",
  height = "70vh",
  translateY = "0%",
  deletebutton = false,
}) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center z-50"
      onClick={modalHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-t-3xl p-6 transform transition-transform duration-500 ease-in-out 
                visible opacity-100
                 absolute bottom-0`}
        style={{ width, height, transform: `translateY(${translateY})` }}
      >
        <div className="flex justify-end items-center mb-4">
          {delete_button && (
            <button onClick={modalHandler} className="text-gray-500">
              ✕
            </button>
          )}
        </div>
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  );
}
