"use client";

import IdentificationForm from "./IdentificationForm";
import { useEffect, useState } from "react";

export default function IdentificationBox({
  setChecked,
  setErrorCode,
  identification,
  setIdentification,
}) {
  // const [identification, setIdentification] = useState("".padStart(13, " "));
  const [checkidentification, setCheckIdentification] = useState("".padStart(13, " "));

  useEffect(() => {
    const isEmpty = identification.includes(" ") || checkidentification.includes(" ");
    const isMismatch = identification !== checkidentification;
    setErrorCode([!isMismatch, !identification.includes(" "), !checkidentification.includes(" ")]);
    setChecked(!isEmpty && !isMismatch);
  }, [identification, checkidentification, setChecked, setErrorCode]);

  return (
    <>
      <IdentificationForm
        title="주민번호"
        identification={identification}
        setIdentification={setIdentification}
      />
      <IdentificationForm
        title="주민번호 확인"
        identification={checkidentification}
        setIdentification={setCheckIdentification}
      />
    </>
  );
}
