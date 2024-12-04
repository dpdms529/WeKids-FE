
import CardReview from "@/src/ui/components/card/CardReview";
import Header from "@/src/ui/layout/Header";

export default function Page() {
  return (
    <div className="flex flex-col h-screen max-w-full bg-white overflow-hidden">
      <Header />
      <CardReview />
    </div>
  );
}
