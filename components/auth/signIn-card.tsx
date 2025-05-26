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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import Image from "next/image";
import { Input } from "../ui/input";
import { LoginSchema } from "@/types/login-schema";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function AuthCard() {
  const [isclicked, setIsClicked] = useState(false);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Dialog
        onOpenChange={(open) => {
          if (!open) setIsClicked(false);
        }}
      >
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="w-[640px]   py-[55px] px-[150px] text-center   ">
          <DialogHeader className=" flex  justify-center">
            {isclicked === false ? (
              <div className=" flex flex-col gap-[40px] text-center">
                <h2 className="font-abril text-[32px]">Welcome back.</h2>
                <div className="flex flex-col gap-[10px]">
                  <div className=" relative flex items-center px-5 border-black border-[1px] rounded-full h-[41px] font-helvetica font-light text-base cursor-pointer ">
                    <div className=" absolute left-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25"
                        height="25"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#fbc02d"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#e53935"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4caf50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1565c0"
                          d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>{" "}
                    </div>
                    <span className="w-full text-center">
                      Sign in with Google
                    </span>
                  </div>
                  <div className=" relative flex items-center px-5 border-black border-[1px] rounded-full h-[41px] font-helvetica font-light text-base cursor-pointer ">
                    <div className=" absolute left-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                      >
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                      </svg>{" "}
                    </div>
                    <span className="w-full text-center">
                      Sign in with Gitbub
                    </span>
                  </div>
                  <div
                    onClick={() => setIsClicked(true)}
                    className=" relative flex items-center px-5 border-black border-[1px] rounded-full h-[41px] font-helvetica font-light text-base cursor-pointer "
                  >
                    <div className=" absolute left-3">
                      <img
                        className="w-[25px] h-[25px] "
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO3YT6hNURTH8Y/nP+UlQoT0CgMGDKSkSCkpSSmlGChTQ6NXeiNTQwO9kjJRMjFgQErKSzJhQAyI/Mn//3/e0a316vS69/Z679x7zzntb+06nb322nuf3W+vtQ6JRCKR6BFZTZrabaSqZLXdyIDqMdBsI5+wX3XYg/etxD6K0+hTXqbhJP61EvtgrvMK+pWP/lhbFmsdbCX2/HE9xgblYR0eNpFBy1trFUbi3Rcc1Hv24WOs6cG4i6nt9TsHw7m+s5ip+0wPzY7GOi5i/mTiyHH8jv6bWKp7LMK1mPtPCHxKAXE7XoXNc2zReTbhacz5FruKiuwrcCfsfuKYznEY32Kue1hddIoyG2fG6WaW4pgRehjzfx5zO5lrHcH3GHMby02dJbiRO/GGNruSNG7Gsxj3BjtNnm14Gb5eYGu3s9/FuD6BW6UdjS//K3zcwrJepfHj7/kLmDeBcY04da6gOJUVWY8cwtfwcx9r2tiuxN2w/YGjZSus1uNR+HqH3U1sduB12DzBxrJWiAtwOfz9xakoCRqp94nQUqPvKhaWvdTtw1BON5eijdU7QwXXO1mna/a9+JDz/xkHqvrzYW2UBCPx3Amy2v5FqSpZ2kjJyNKJlIwsnUjJyGp7IlnFm9psJJFIJBK6zX+RmLvdeUFJ9AAAAABJRU5ErkJggg=="
                        alt="new-post--v1"
                      />{" "}
                    </div>
                    <span className="w-full text-center">
                      Sign in with Email
                    </span>
                  </div>
                </div>

                <div className=" font-helvetica flex flex-col items-center gap-[35px] ">
                  <div className=" text-base flex gap-[5px]  ">
                    <p className="font-light">No account?</p>
                    <Link
                      className=" text-blue font-bold hover:underline "
                      href={"/"}
                    >
                      Create one
                    </Link>
                  </div>
                  <p className="font-light text-sm">
                    Forgot email or trouble signing in?{" "}
                    <span className=" underline">Get help.</span>{" "}
                  </p>
                  <p className="font-light text-sm">
                    {" "}
                    Click “Sign in” to agree to Medium’s Terms of Service and
                    acknowledge that Medium’s Privacy Policy applies to you.{" "}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-[40px] text-center ">
                  <div className=" flex flex-col gap-[40px]">
                    <div className=" flex flex-col gap-[10px]">
                      <h2 className="font-abril text-[24px]">
                        Sign in with email
                      </h2>
                      <p className="font-light text-base   ">
                        Enter the email address and password associated with
                        your account
                      </p>
                    </div>
                    <div className=" font-light ">
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className=" flex flex-col gap-[35px] justify-center"
                        >
                          <div className=" flex flex-col gap-[15px]">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field, fieldState }) => (
                                <FormItem>
                                  <div className=" flex flex-col items-start gap-2">
                                    <FormLabel className="font-light text-base">
                                      Your email
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter your email address"
                                        className={cn(
                                          "bg-[#E1E1E1]  !text-base h-[43px] rounded-full px-5 !ring-0 focus:!outline-none focus:!border-none focus:!ring-0",
                                          fieldState.error
                                            ? " border border-redError  "
                                            : "border-none"
                                        )}
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage className="font-light text-sm text-redError" />
                                  </div>
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="password"
                              render={({ field, fieldState }) => (
                                <FormItem>
                                  <div className=" flex flex-col items-start gap-[10px] ">
                                    <FormLabel className="font-light text-base">
                                      Your password
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter your password"
                                        className={cn(
                                          "bg-[#E1E1E1]  !text-base h-[43px] rounded-full px-5 !ring-0 focus:!outline-none focus:!border-none focus:!ring-0",
                                          fieldState.error
                                            ? " border border-redError  "
                                            : "border-none"
                                        )}
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage className="font-light text-sm text-redError" />
                                  </div>
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="">
                            <button
                              type="submit"
                              className="bg-black  text-white w-[117px] h-[41px] rounded-full hover:bg-very_gray transition-colors  ease-in-out duration-200"
                            >
                              Continue
                            </button>{" "}
                          </div>
                        </form>
                      </Form>
                    </div>
                  </div>
                  <div className=" ">
                    <p
                      className="font-light cursor-pointer underline"
                      onClick={() => setIsClicked(false)}
                    >
                      Back to sign up options
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
