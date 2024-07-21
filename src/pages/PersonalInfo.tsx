import { useState } from "react";
import { InputField } from "../components/InputField";
import { useAppSelector, useAppDispatch } from "../data/hooks";
import {
  setName as setGlobalName,
  setEmail as setGlobalEmail,
  setPhoneNumber as setGlobalPhoneNumber,
} from "../data/formSlice";

export const PersonalInfo = () => {
  const {
    name: globalName,
    email: globalEmail,
    phoneNumber: globalPhoneNumber,
  } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const [name, setName] = useState(globalName);
  const [email, setEmail] = useState(globalEmail);
  const [phoneNumber, setPhoneNumber] = useState(globalPhoneNumber);

  const validateName = (name: string) => {
    const nameRegex = /^[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex =
      /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleNameChange = (value: string) => {
    setName(value);
    dispatch(setGlobalName(value));
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    dispatch(setGlobalEmail(value));
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
    dispatch(setGlobalPhoneNumber(value));
  };

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
          onChange={handleNameChange}
        />
        <InputField
          id="email"
          label="Email Address"
          validationFn={validateEmail}
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={handleEmailChange}
        />
        <InputField
          id="phoneNumber"
          label="Phone Number"
          validationFn={validatePhoneNumber}
          placeholder="e.g. +1 234 567 8900"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </form>
    </div>
  );
};
