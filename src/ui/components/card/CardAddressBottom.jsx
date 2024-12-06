import InputTextBox from "@/src/ui/components/atoms/InputTextBox";

export default function CardAddressBottom({ name, phone, setName, setPhone }) {
  return (
    <>
      <div className="flex flex-col h-[130px]">
        <div className="mb-3">받는 분 이름을 입력해 주세요.</div>
        <InputTextBox value={name} onChange={setName} />
      </div>
      <div className="flex flex-col h-[130px]">
        <div className="mb-3">연락처를 입력해 주세요.</div>
        <InputTextBox value={phone} onChange={setPhone} />
      </div>
    </>
  );
}
