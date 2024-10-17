"use client"
import Tally from "@/components/client/tally";
export default function Tallys({onSave=()=>{}}){
  return (
    <>
    <Tally initialCount={10} onSave={onSave} />
    <Tally initialCount={20} onSave={onSave} />
    </>
  )
}