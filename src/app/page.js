import Header from "../ui/layout/Header";
import "./globals.css";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ParentHome from "../ui/Components/home/parent/ParentHome";
import ChildHome from "../ui/Components/home/child/ChildView";

export default async function Home() {
  const session = await auth();
  const authorization = session?.user?.Authorization;

  if (!authorization) redirect("/onboard");

  const memberType = session.user.role;

  const components =
    memberType === "ROLE_PARENT" ? <ParentHome authorization={authorization} /> : <ChildHome />;

  return (
    <div className="flex flex-col w-full h-full space-y-8">
      <Header />
      <div className="flex justify-center w-full h-full">{components}</div>
    </div>
  );
}
