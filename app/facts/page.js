
import Fact from "@/components/client/fact";
import Header from "@/components/server/header";


export default function Page(){
  

    

    return ( <>
    <Header currentPage="/facts" />
    <h1>Facts</h1>
    <Fact />
    </>
  )
}