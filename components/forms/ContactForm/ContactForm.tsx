"use client";
import styles from "./ContactForm.module.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/Label/Label";
import { Input } from "@/components/ui/Input/Input";
import Intersection from "@/components/ui/Intersection/Intersection";
import { Textarea } from "@/components/ui/TextArea/TextArea";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  mailingAddress: string;
  message: string;
};

type TContactForm = ({
  contactFormType,
}: {
  contactFormType: "contact" | "yardSigns";
}) => JSX.Element;

const ContactForm: TContactForm = (t) => {
  const { contactFormType } = { ...t };

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
  const submitForm = async (values: FormData) => {
    const res = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  };
  const onSubmit = (data: FormData) => {
    submitForm(data);
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
          <p className="text-lg font-semibold">Thank you.</p>
          <p className="text-sm mt-2">From the Friends of Sean Cavanaugh.</p>
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

  const Form = () => {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-1 block p-4 shadow-sm max-w-2xl m-auto mt-20 md:mt-0`}
      >
        <div className="text-lg font-semibold">Send us a message</div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 my-4">
          {/* firstName Field */}
          <div className="space-y-2">
            {errors.firstName ? (
              <span
                className={`text-red text-[8px] uppercase font-extrabold [text-shadow:_0px_0px_30px_white_] ${styles["error-message"]}`}
              >
                * {errors.firstName.message}
              </span>
            ) : (
              <Label c={"black"} htmlFor="firstName">
                First Name
              </Label>
            )}
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "firstName is required",
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                  message: "Invalid first name",
                },
              })}
            />
          </div>
          {/* Last Name Field */}
          <div className="space-y-2">
            {errors.lastName ? (
              <span
                className={`text-red text-[8px] uppercase font-extrabold [text-shadow:_0px_0px_30px_white_] ${styles["error-message"]}`}
              >
                * {errors.lastName.message}
              </span>
            ) : (
              <Label c={"black"} htmlFor="name">
                Last Name
              </Label>
            )}
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                  message: "Invalid last name",
                },
              })}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2 w-full">
            {errors.email ? (
              <span
                className={`text-red text-[8px] uppercase font-extrabold [text-shadow:_0px_0px_30px_white_] ${styles["error-message"]}`}
              >
                * {errors.email.message}
              </span>
            ) : (
              <Label c={"black"} htmlFor="email">
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

        <div className="flex flex-col justify-start space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-4">
          {/* Phone Field */}
          <div className="space-y-2  min-w-[150px]">
            {errors.phone ? (
              <span
                className={`text-red text-[8px] uppercase font-extrabold [text-shadow:_0px_0px_30px_white_] ${styles["error-message"]}`}
              >
                * {errors.phone.message}
              </span>
            ) : (
              <Label c={"black"} htmlFor="phone">
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
                pattern: {
                  value: /^\+1 \(\d{3}\) \d{3}-\d{4}$/,
                  message: "Invalid phone number",
                },
              })}
            />
          </div>
          {/* Mailing Address Field */}
          <div className="space-y-2 w-full">
            {errors.mailingAddress ? (
              <span
                className={`text-red text-[8px] uppercase font-extrabold [text-shadow:_0px_0px_30px_white_] ${styles["error-message"]}`}
              >
                * {errors.mailingAddress.message}
              </span>
            ) : (
              <Label c={"black"} htmlFor="mailingAddress">
                Mailing Address
              </Label>
            )}
            <Textarea
              id="mailingAddress"
              placeholder="1234 Main St. Anytown, USA 12345"
              {...register("mailingAddress", {
                pattern: {
                  value: /^[a-zA-Z0-9\s,'-]*$/,
                  message: "Invalid mailing address",
                },
              })}
            />
          </div>
          {/* Message Field */}
          <div className="space-y-2 w-full">
            {errors.message ? (
              <span
                className={`text-red text-[8px] uppercase font-extrabold [text-shadow:_0px_0px_30px_white_] ${styles["error-message"]}`}
              >
                * {errors.message.message}
              </span>
            ) : (
              <Label c={"black"} htmlFor="message">
                Message
              </Label>
            )}
            <Textarea id="message" {...register("message", {})} />
          </div>

          <input
            type="submit"
            className="cursor-pointer hover:bg-primary-dark border border-primary-dark p-1"
            value="Submit"
            width={100}
            style={{
              height: "40px",
              alignSelf: "flex-end",
            }}
          />
        </div>
        <div className="text-sm text-muted-foreground mt-4 ">
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy" className="underline ">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-service" className="underline ">
            Terms of Service
          </a>
        </div>
      </form>
    );
  };
  return (
    <>
      {submitted ? (
        <Intersection>
          <SubmittedOverlay />
        </Intersection>
      ) : (
        <Form />
      )}
    </>
  );
};

export default ContactForm;
