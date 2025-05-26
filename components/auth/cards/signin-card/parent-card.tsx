"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import Link from "next/link";
import EmailSigninCard from "./emailSignin-card";
import SocialsSignin from "./socials-signin";

interface typeValue {
value: boolean
}

export default function AuthCard({setIsDialogOpen, isDialogOpen}) {
  const [isclicked, setIsClicked] = useState(false);

  function handleEmailCard (value) {
    setIsClicked(value)
  }

  function handleDialogOpenChange (open) {
    setIsDialogOpen(open)
    if (!open)  {
      handleEmailCard(false)
    }
  }

  return (
    <div>
      <Dialog
        onOpenChange={setIsDialogOpen}
        open= {isDialogOpen}

      >
        <DialogTrigger></DialogTrigger>
        <DialogContent className="w-[640px]   py-[55px] px-[150px] text-center   ">
          <DialogHeader className=" flex  justify-center">
            {isclicked === false ? (
              <SocialsSignin handleEmailCard= {handleEmailCard} />
            ) : (
              <>
                <EmailSigninCard handleEmailCard= {handleEmailCard} />
              </>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
