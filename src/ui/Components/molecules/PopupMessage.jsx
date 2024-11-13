// PopupMessage.js

const PopupMessage = ({
  title,
  message,
  buttonText,
  onButtonClick,
  width,
  height,
  onClose, // X 버튼이나 확인 버튼 클릭 시 호출될 함수
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "24px",
        border: "1px solid #ccc",
        borderRadius: "10px", // border-radius 10px 적용
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        width: width || "358px",
        height: height || "auto",
        textAlign: "center",
        position: "relative", // 부모 요소에 relative 위치 설정
      }}
    >
      {/* 왼쪽 상단 X 버튼 */}
      <button
        onClick={onClose} // X 버튼 클릭 시 onClose 호출
        style={{
          position: "absolute",
          top: "10px", // 상단 10px
          left: "10px", // 왼쪽 10px
          background: "transparent", // 배경 없애기
          border: "none", // 테두리 없애기
          color: "#000", // 글자색 검정
          fontSize: "20px", // 아이콘 크기
          cursor: "pointer", // 마우스 커서 손 모양으로 변경
        }}
      >
        X
      </button>

      <h3>{title}</h3>
      <p>{message}</p>
      <button
        onClick={() => {
          onButtonClick(); // 확인 버튼 클릭 시 onButtonClick 호출
          onClose(); // 클릭 후 팝업 닫기
        }}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px", // button의 border-radius
          cursor: "pointer",
          position: "absolute", // 버튼을 절대 위치로 설정
          bottom: "18px", // 바닥에서 18px 위로 위치
          left: "50%", // 버튼을 가로로 중앙 정렬
          transform: "translateX(-50%)", // 버튼을 중앙으로 정렬
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PopupMessage;
