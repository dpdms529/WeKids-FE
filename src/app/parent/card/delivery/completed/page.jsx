import Header from "@/src/ui/layout/Header";
import CardCompleteComponent from "@/src/ui/components/card/CardCompleteComponent";

const CardIssueComplete = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <Header />
      <CardCompleteComponent />
    </div>
  );
};

export default CardIssueComplete;
