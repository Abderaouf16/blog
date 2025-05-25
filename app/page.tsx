import AuthCard from "@/components/auth/signIn-card";
import LandingPageNav from "@/components/navigation/LandingPage-nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col bg-bananaLight">
        <LandingPageNav />
        <main className="flex-1 flex lg:px-[180px] md:px-[90px] px-[30px] bg-bananaLight py-[100px]">
          <div className="  w-[50rem] flex flex-col  justify-center gap-[45px]">
            <h1 className=" font-abril text-[96px] leading-[110px] ">
              <span className=" block">Human</span> projects & ideas
            </h1>
            <h4 className=" text-2xl  font-helvetica font-[350] ">
              A place to read, write, and deepen your understanding
            </h4>
            <button  className="  font-helvetica font-[400]    text-lg flex items-center justify-center bg-black text-white w-[275px] h-[45px] rounded-full hover:bg-very_gray transition-colors  ease-in-out duration-200">
              Start exploring
            </button>
          </div>
          <div className=" ">
            <h1>ff</h1>
            <AuthCard/>

          </div>
        </main>
      </div>
    </>
  );
}
