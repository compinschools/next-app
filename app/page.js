
import Header from "@/components/server/header";
import Image from "next/image";

export default async function Home() {

  async function save(tally){
    "use server";
    console.log("Saving...",tally);
  }

  return (
    <>
      <Header currentPage="/" />
      <div>
        <h1>Hello World!</h1>
        
      </div>
    </>
  );
}
