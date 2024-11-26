"use client";

import IdentificationForm from "./IdentificationForm";
import { useEffect, useState } from "react";

export default function IdentificationBox({ setChecked }) {
  const [identification, setIdentification] = useState("".padStart(13, " "));
  const [checkidentification, setCheckIdentification] = useState(
    "".padStart(13, " "),
  );

  useEffect(() => {
    setChecked(
      !identification.includes(" ") &&
        !checkidentification.includes(" ") &&
        identification == checkidentification,
    );
  });
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
