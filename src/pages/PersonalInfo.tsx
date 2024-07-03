import { useState } from "react";
import { InputField } from "../components/InputField";

export const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(phoneNumber);
  }

  return (
    <div className="w-full flex flex-col gap-10 rounded-lg bg-white p-8 -mt-24 lg:mt-0">
      <div className="flex flex-col gap-4">
        <h1 className="text-primary-marine text-3xl font-bold tracking-wide">
          Personal info
        </h1>
        <p className="text-base text-neutrals-coolGray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="w-full flex flex-col gap-8">
        <InputField
          id="name"
          label="Name"
          validationFn={validateName}
          placeholder="e.g. Stephen King"
          value={name}
          onChange={setName}
        />
        <InputField
          id="email"
          label="Email Address"
          validationFn={validateEmail}
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={setEmail}
        />
        <InputField
          id="phoneNumber"
          label="Phone Number"
          validationFn={validatePhoneNumber}
          placeholder="e.g. +1 234 567 8900"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
      </form>
    </div>
  );
};
