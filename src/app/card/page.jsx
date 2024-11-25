
import CardRequestReview from "@/src/ui/components/card/CardRequestReview";
import InnerText from "@/src/ui/components/card/InnerText";
import Header from "@/src/ui/layout/Header";


export default function Page() {

    return(
        <div className="flex flex-col h-screen max-w-full bg-white overflow-hidden">
          <Header />
          <CardRequestReview >
            <InnerText name1={"강현우"} name2={"조예은"}/>
          </CardRequestReview>
        </div>

    )


}