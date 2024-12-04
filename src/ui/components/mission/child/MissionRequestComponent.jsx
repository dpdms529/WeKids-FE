import { useRef, useState } from "react";
import CustomButton from "../../atoms/CustomButton";
import Image from "next/image";
import imageCompression from "browser-image-compression";

const data = {
  1: "미션 설명이 들어갑니다. 미션 설명은 총 몇 자 인가요? 넓이 영역에 대해 한번 고려 해보셔야 할 것 같습니다. 보통 설명이 이렇게까지 길어지는 일이 있을지는 잘 모르겠습니다. 부모님이 자식에게 이 만큼 설명하는 것이 아이 연령을 고려했을 때 불필요한 일일 수도 있습니다만 저희는 최대 길이 영역을 고려하여 디자인 진행을 해야합니다",
  2: "미션 성공 시 총 30,000원을 받을 수 있어요.",
  3: "🍪 2024년 11월 20일 (수) 까지 완료할 수 있어요",
  4: "아이가 메시지를 작성하지 않았습니다. ",
  5: "이곳에 미션명이 들어갑니다.",
};

const MissionRequestComponent = ({ setIsModalOpen, setFile }) => {
  const [previewURL, setPreviewURL] = useState("");
  const fileRef = useRef();
  const [reward, setReward] = useState(1000000000);
  const [period, setPeriod] = useState(new Date());
  const [message, setMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const AddAndCloseModal = () => {
    setIsModalOpen(false);
  };

  const compressAndSetFile = async (file) => {
    if (file) {
      const options = {
        maxSizeMB: 1, // 최대 1MB로 압축
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);

        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewURL(reader.result);
        };
        reader.readAsDataURL(compressedFile);

        setFile(compressedFile);
      } catch (error) {
        console.error("Error compressing the file:", error);
      }
    }
  };

  const handleFileOnChange = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    await compressAndSetFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    await compressAndSetFile(file);
  };

  const handleDeleteFile = () => {
    setPreviewURL("");
    setFile(null);
    setIsDragging(false);
  };

  const handleFileButtonClick = (e) => {
    e.preventDefault();
    fileRef.current.click();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center h-full">
      <div className=" gap-1 mb-5 pt-10 px-7 w-full text-sub02 text-R-15">{data[5]}</div>
      <div className="flex flex-col pb-10 px-7 w-full gap-2 mb-3 overflow-auto">
        <p className="text-R-10 text-sub02">미션 완료 방법</p>
        <div className="p-3 bg-main02/20 border rounded-lg text-R-12 shadow-md text-sub02/60">
          {data[1]}
        </div>
        <p className="p-3 text-center bg-main02/20 border rounded-lg text-R-12 shadow-md text-sub02/60">
          미션 성공 시 총 <span className="text-sub02">{reward.toLocaleString()}</span> 원을 받을
          수 있어요
        </p>
        <p className="p-3 text-center bg-main02/20 border rounded-lg text-R-12 shadow-md text-sub02/60">
          🍪{" "}
          <span className="text-sub02">
            {period
              ? `${period.getFullYear()}년 ${period.getMonth() + 1}월 ${period.getDate()}일`
              : ""}
          </span>{" "}
          까지 완료할 수 있어요
        </p>

        <p className="text-R-10 mt-6 text-sub02">미션 완료 인증하기</p>
        <div
          className={`flex flex-col items-center justify-center p-3 mb-6 ${
            isDragging ? "bg-white" : "bg-main02/20"
          } w-full h-32 border shadow-md rounded-lg`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {previewURL ? (
            <div className="flex flex-row gap-2 justify-between w-full h-28">
              <Image
                src={previewURL}
                alt="Uploaded Preview"
                width={100}
                height={100}
                className="rounded-md object-contain bg-white w-4/5 h-auto"
              />
              <button
                className="w-1/5 h-28 flex flex-col items-center justify-center bg-black/10 hover:bg-black/40 rounded-md"
                onClick={handleDeleteFile}
              >
                <Image
                  src="/images/trashImg.svg"
                  alt="delete image"
                  width={25}
                  height={25}
                />
                <p className="text-R-10">삭제</p>
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <button
                className="w-12 h-12 items-center justify-center bg-transparent rounded-full"
                onClick={handleFileButtonClick}
              >
                <Image
                  src="/images/backupImg.svg"
                  alt="upload image"
                  width={50}
                  height={50}
                  className="bg-transparent"
                />
              </button>
              <input
                ref={fileRef}
                hidden={true}
                id="file"
                type="file"
                onChange={handleFileOnChange}
              />
              <p className="text-R-10 text-black/40 mt-2">
                드래그하거나 파일을 업로드하세요.
              </p>
            </div>
          )}
        </div>
        <p className="text-R-10 text-sub02">부모님께 보낼 메시지</p>
        <div
          className={`${
            message ? "bg-main02/20" : "bg-grey01/20"
          } rounded-lg text-R-12 shadow-md`}
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-8 bg-transparent rounded-md resize-none outline-none p-2 text-black/80"
          ></textarea>
        </div>
          <div className="flex flex-col h-[40px] px-10 mt-9 items-center">
            <CustomButton
              size="mediumLarge"
              rounded={true}
              onClick={AddAndCloseModal}
              className="text-R-20 bg-main02 w-full"
            >
              미 션 완 료
            </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default MissionRequestComponent;
