"use client";

import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

export const EmailSignUp = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("email", email);
  };

  return (
    <>
      <form
        className="mt-10 flex flex-col md:flex-row md:gap-3"
        onSubmit={handleSubmit}
      >
        <Input
          aria-label="email input for free trial"
          placeholder="Email address"
          type="email"
          onChange={setEmail}
        />
        <Button
          className="mt-3 md:mt-0 md:px-4 md:w-fit md:whitespace-nowrap"
          type="submit"
        >
          Start free trial
        </Button>
      </form>
      <p className="mt-3 text-sm leading-5 text-gray-300">
        Start your free 14-day trial, no credit card necessary. By providing
        your email, you agree to our{" "}
        <span className="font-medium text-white">terms or service</span>.
      </p>
    </>
  );
};
