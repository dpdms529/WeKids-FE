import LimitedInputBox from "./LimitedInputBox";

export default function IdentificationForm({
  title,
  identification,
  setIdentification,
}) {
  const InputTextHandler = (value, idx) => {
    let number;
    switch (idx) {
      case 1:
        number = value.padEnd(6, " ").slice(0, 6) + identification.slice(6);
        setIdentification(number);
        break;
      case 2:
        number = identification.slice(0, 6) + value.padEnd(7, " ").slice(0, 7);
        setIdentification(number);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-R-20 text-black/60">{title}</div>
      <div className="flex flex-row justify-between gap-2">
        <LimitedInputBox
          text={identification.slice(0, 6).replace(/\s/g, "")}
          placeholder="111111"
          maxLength={6}
          onChange={(e) => InputTextHandler(e, 1)}
        />
        <div className="flex flex-col h-full justify-center">-</div>
        <LimitedInputBox
          text={identification.slice(6, 13).replace(/\s/g, "")}
          placeholder="1111111"
          security={true}
          onChange={(e) => InputTextHandler(e, 2)}
        />
      </div>
    </div>
  );
}
