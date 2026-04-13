import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import LoginOTP from "./LoginOTP";
import { AnimatePresence, motion } from "motion/react";

const formSchema = z.object({
  email: z.email({ message: "Please enter a valid email address" }),
});

export default function LoginForm() {
  const [otpIsSent, setOtpIsSent] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      setOtpIsSent(true);
      toast.success("You submitted your email", {
        position: "top-center",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
          backgroundColor: "var(--accent)",
        } as React.CSSProperties,
      });
    },
  });

  return (
    <>
      <Card className="w-full sm:max-w-md bg-primary border">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Enter your email address"
                        autoComplete="on"
                      />
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  );
                }}
              />
              <Field orientation="horizontal">
                <Button type="button" variant="outline" onClick={() => form.reset()}>
                  Reset
                </Button>
                <Button type="submit" form="login-form">
                  Submit
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <br />
      <AnimatePresence>
        {otpIsSent && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="w-full sm:max-w-md bg-primary border">
              <CardHeader>
                <CardTitle>Verify OTP</CardTitle>
              </CardHeader>
              <CardContent>
                <LoginOTP />
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
