'use client'
import Image from "next/image";
import React, { useState } from "react";
import logo from '@/public/Logo/Archi_vision_logo.png'
import AuthCard from "../auth/cards/signin-card/parent-card";
export default function LandingPageNav() {

  const [ isDialogOpen, setIsDialogOpen ] = useState(false)

  return (
    <>
    <div className=" flex items-center justify-between  lg:px-[180px] md:px-[90px] px-[30px] border-black  border-b-[1px]  ">
      <div className=" flex items-center gap-3">
        <Image src={logo} height={35} width={37}  alt="logo"/>
        <p className=" font-abril  text-2xl">Curious </p>
      </div>
      <div className=" flex  justify-center items-center py-[17px]">
        <ul className="flex items-center gap-[30px]   text-sm font-helvetica font-normal     ">
          <li className=" cursor-pointer">Story</li>
          <li className=" cursor-pointer">Publish</li>
          <li className=" cursor-pointer" onClick={ () => setIsDialogOpen(true)  } >Sign in </li>
          <li>
            <button className="bg-black text-white w-[117px] h-[41px] rounded-full hover:bg-very_gray transition-colors  ease-in-out duration-200">
              Get started
            </button>
          </li>
        </ul>
      </div>

    </div>
      <AuthCard isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
    </>
  );
}
