import React from "react";
import RegForm from "./RegForm";
import { cookies } from "next/headers";

const RegFormPage = async () => {
  const cookie = await cookies();
  const email = cookie.get("email").value;
  const name = cookie.get("name").value;
  const birthday = cookie.get("birthday").value;

  const data = {
    email: email,
    name: name,
    birthday: birthday,
  };

  return <RegForm data={data} />;
};

export default RegFormPage;
