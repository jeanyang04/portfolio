// src/components/contact-form.tsx
"use client";

import { useEffect, useActionState } from 'react'; // Changed useFormState to useActionState
import { useFormStatus } from 'react-dom'; // useFormStatus remains from react-dom
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { Loader2, Send, CheckCircle, AlertCircle } from 'lucide-react';

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" /> Send Message
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed to useActionState
  
  // This is a common pattern if you want to clear the form on success,
  // but react-hook-form handles this better. For basic useFormState, this is manual.
  // If using react-hook-form, you'd call reset() from useForm().
  // Since we're using simple useFormState, we rely on `state.fields` being empty on success.

  return (
    <Card className="w-full max-w-lg shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Get in Touch</CardTitle>
        <CardDescription>Fill out the form below, and I&apos;ll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          {state.message && (
            <Alert variant={state.success ? "default" : "destructive"} className={state.success ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400" : ""}>
              {state.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <AlertTitle>{state.success ? "Success!" : "Error!"}</AlertTitle>
              <AlertDescription>{state.message}</AlertDescription>
              {state.issues && state.issues.length > 0 && (
                <ul className="mt-2 list-disc list-inside text-xs">
                  {state.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              )}
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/90">Your Name</Label>
            <Input 
              id="name" 
              name="name" 
              type="text" 
              placeholder="John Doe" 
              required 
              defaultValue={state.fields?.name}
              className="bg-background border-border focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/90">Your Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="john.doe@example.com" 
              required 
              defaultValue={state.fields?.email}
              className="bg-background border-border focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/90">Message</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Your message here..." 
              rows={5} 
              required 
              defaultValue={state.fields?.message}
              className="bg-background border-border focus:border-primary focus:ring-primary"
            />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
