import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^09\d{9}$/, {
      message: "please enter a valid 11 digit mobile number",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
