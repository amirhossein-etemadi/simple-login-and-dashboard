import { z } from "zod";

export const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^09\d{9}$/, {
      message: "Please enter a valid 11-digit Iranian mobile number.",
    }),
});

export type TFormSchema = z.infer<typeof formSchema>;

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, { message: "شماره تلفن الزامی است" })
    .regex(/^09\d{9}$/, {
      message: "لطفا یک شماره تلفن معتبر ایرانی وارد کنید",
    }),
  password: z
    .string()
    .min(8, { message: "رمز ورود باید حداقل ۸ کاراکتر باشد" }),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
