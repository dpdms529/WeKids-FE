import Header from "@/src/ui/layout/Header";
import DeliveryComponent from "@/src/ui/components/card/DeliveryComponent";




const CardIssueCompleteNodelivery = () => { 

  return (
    <div className="flex flex-col justify-between h-screen bg-white">
      <Header />
      <DeliveryComponent />
    </div>
  );
};

export default CardIssueCompleteNodelivery;
