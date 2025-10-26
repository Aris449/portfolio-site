import Link from "next/link";
import {AnimatedWrapper} from "@/app/components/Animations";

export default function Home() {
  return (
   <div className="flex justify-center items-center min-h-[calc(100vh-14rem)]">
       <AnimatedWrapper>
       <div className="flex items-center  justify-center w-80 md:w-md h-64 bg-bg rounded-4xl border border-[hsl(0,0%,20%)]">
           <div className="flex flex-col justify-center w-2/3">
            <h1 className="text-4xl py-2 md:py-4 font-bold">hi, I&apos;m Dmytro</h1>
            <p className="text-xl text-text-muted py-2">a web developer</p>
            <Link href="/about" className="flex justify-center items-center bg-bg-light p-4 my-1 md:my-4 rounded-2xl w-40 text-xl font-bold border border-[hsl(0,0%,20%)]">Learn more about me</Link>
           </div>
       </div>
       </AnimatedWrapper>
   </div>
  );
}
