"use client";
import styles from "./ContactForm.module.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/Label/Label";
import { Input } from "@/components/ui/Input/Input";
import { Textarea } from "@/components/ui/TextArea/TextArea";
import Button from "@/components/ui/Button/Button";
import Intersection from "@/components/ui/Intersection/Intersection";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = ({ c }: { c: "white" | "black" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    mode: "onBlur",
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    reset();
    setSubmitted(true);
  };

  const SubmittedOverlay = () => {
    const timer = setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    if (!submitted) {
      clearTimeout(timer);
      return null;
    } else
      return (
        <div className="bg-white text-foreground p-4 rounded-md shadow-lg">
          <p className="text-lg font-semibold">Message sent successfully!</p>
          <p className="text-sm mt-2">
            We will get back to you as soon as possible.
          </p>
        </div>
      );
  };
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, "");

    // Define the formatted output based on length
    if (cleaned.length <= 1) return `+${cleaned}`;
    if (cleaned.length <= 4)
      return `+${cleaned.slice(0, 1)} (${cleaned.slice(1)}`;
    if (cleaned.length <= 7)
      return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(
        4
      )}`;
    if (cleaned.length <= 10)
      return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(
        4,
        7
      )}-${cleaned.slice(7)}`;

    // Return the formatted number up to a maximum of 14 characters
    return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(
      4,
      7
    )}-${cleaned.slice(7, 11)}`;
  };
  const handlePhoneInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.currentTarget.value);
    setValue("phone", formatted);
  };

  const FadeInSubmittedOverlay = Intersection(SubmittedOverlay);
  const Form = () => {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-1 block ${styles["fixed-form"]} `}
      >
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          {/* Name Field */}
          <div className="space-y-2">
            {errors.name ? (
              <span
                className={`text-red text-sm font-extrabold [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_] ${styles["error-message"]}`}
              >
                {errors.name.message}
              </span>
            ) : (
              <Label c={c} htmlFor="name">
                Name
              </Label>
            )}
            <Input
              id="name"
              type="text"
              placeholder="First & Last Name"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                  message: "Invalid name",
                },
              })}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            {errors.email ? (
              <span
                className={`text-red text-sm font-extrabold [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_] ${styles["error-message"]}`}
              >
                {errors.email.message}
              </span>
            ) : (
              <Label c={c} htmlFor="email">
                Email
              </Label>
            )}

            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          {errors.message ? (
            <span
              className={`text-red text-sm font-extrabold [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_] ${styles["error-message"]}`}
            >
              {errors.message.message}
            </span>
          ) : (
            <Label c={c} htmlFor="message">
              Message
            </Label>
          )}
          <Textarea
            id="message"
            placeholder="Your message here..."
            {...register("message", { required: "Message is required" })}
          />
        </div>
        <div className="flex flex-col justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          {/* Phone Field */}
          <div className="space-y-2">
            {errors.phone ? (
              <span
                className={`text-red text-sm font-extrabold [text-shadow:_1px_1px_.5rem_white_,_1px_-1px_.5rem_white_] ${styles["error-message"]}`}
              >
                {errors.phone.message}
              </span>
            ) : (
              <Label c={c} htmlFor="phone">
                Phone
              </Label>
            )}
            <Input
              id="phone"
              type="text"
              placeholder="+1 (309) 734-9999"
              onInput={handlePhoneInput}
              max={17}
              maxLength={17}
              {...register("phone", {
                required: "10 Digits Required",
                pattern: {
                  value: /^\+1 \(\d{3}\) \d{3}-\d{4}$/,
                  message: "Invalid phone number",
                },
              })}
            />
          </div>
          {/* Submit Button */}
          <Button size="sm" variant="white">
            Submit
          </Button>
        </div>
      </form>
    );
  };
  return <>{submitted ? <FadeInSubmittedOverlay /> : <Form />}</>;
};

export default ContactForm;
