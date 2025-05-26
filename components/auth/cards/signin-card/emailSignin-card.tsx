import React from "react";
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
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/types/login-schema";
import { cn } from "@/lib/utils";

export default function EmailSigninCard( {handleEmailCard}) {
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
      <div className="flex flex-col gap-[40px] text-center ">
        <div className=" flex flex-col gap-[40px]">
          <div className=" flex flex-col gap-[15px]">
            <h2 className="font-abril text-[24px]">Sign in with email</h2>
            <p className="font-light text-base   ">
              Enter the email address and password associated with your account
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
            onClick={ ()=>  handleEmailCard(false)}
          >
            Back to sign up options
          </p>
        </div>
      </div>
    </div>
  );
}
