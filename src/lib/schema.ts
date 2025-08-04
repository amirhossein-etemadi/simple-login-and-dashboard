import { z } from "zod";

/**
 * Defines the validation rules for the form.
 * - phoneNumber: A required string that must match the regex for an
 * 11-digit Iranian mobile number starting with "09".
 */
export const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required." })
    .regex(/^09\d{9}$/, {
      message: "Please enter a valid 11-digit Iranian mobile number.",
    }),
});

// This creates a TypeScript type from the Zod schema to use in our components.
export type TFormSchema = z.infer<typeof formSchema>;
