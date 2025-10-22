import Link from "next/link";

export default function Home() {
  return (
   <div className="flex justify-center items-center min-h-[calc(100vh-7rem-5rem)]">
       <div className="flex items-center  justify-center w-80 md:w-md h-64 bg-bg rounded-4xl">
           <div className="flex flex-col justify-center w-2/3">
            <h1 className="text-4xl py-2 md:py-4 font-bold">hi, I'am Dmytro</h1>
            <p className="text-xl text-text-muted py-2">a web developer</p>
            <Link href="/about" className="flex justify-center items-center bg-bg-light p-4 my-1 md:my-4 rounded-2xl w-40 text-xl font-bold">Learn more about me</Link>
           </div>
       </div>
   </div>
  );
}
