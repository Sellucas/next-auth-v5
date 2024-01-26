"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const valideFields = RegisterSchema.safeParse(values);

  if (!valideFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Account created!" };
};
