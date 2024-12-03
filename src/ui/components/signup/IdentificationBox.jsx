"use client";

import { useEffect } from "react";
import IdentificationForm from "./IdentificationForm";

export default function IdentificationBox({
  setChecked,
  setErrorCode,
  identification,
  setIdentification,
}) {
  useEffect(() => {
    const isEmpty = identification.includes(" ");
    setErrorCode([true, !identification.includes(" ")]);
    setChecked(!isEmpty);
  }, [identification, setChecked, setErrorCode]);

  return (
    <IdentificationForm
      title="주민번호"
      identification={identification}
      setIdentification={setIdentification}
    />
  );
}
