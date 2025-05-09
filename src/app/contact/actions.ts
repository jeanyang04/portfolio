// src/app/contact/actions.ts
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).trim(),
  email: z.string().email({ message: "Invalid email address." }).trim(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).trim(),
});

export interface ContactFormState {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
}

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data. Please check the fields below.",
      fields: formData as Record<string, string>, // Keep previous values
      issues: parsed.error.flatten().fieldErrors.message, // This provides a simpler array of messages for generic display
      success: false,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Contact form data submitted:", parsed.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000)); 

  // Example of a simulated error
  // if (parsed.data.email.includes("error")) {
  //   return {
  //     message: "An error occurred while sending your message. Please try again.",
  //     fields: parsed.data,
  //     success: false,
  //   };
  // }

  return {
    message: "Thank you! Your message has been sent successfully.",
    success: true,
    fields: {}, // Clear fields on success
  };
}
