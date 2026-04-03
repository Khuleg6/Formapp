"use client";

import { Textfield } from "./Textfield";
import { Button } from "./Button";
import { useState } from "react";

export const FirstStep = ({ formData, handleChange, handleNextStep }) => {
  const { firstname, lastname, username } = formData;
  const [errors, setErrors] = useState({
    firstnameError: "",
    lastnameError: "",
    usernameError: "",
  });

  // const isHavingError = () => {
  //   return isFirstNameValid() || isLastNameValid() || isUserNameValid();
  // };

  const isFirstNameValid = () => {
    if (firstname === "")
      return setErrors({
        ...errors,
        firstnameError: "First name cannot be empty...",
      });
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/.test(firstname))
      return setErrors({
        ...errors,
        firstnameError:
          "First name cannot contain special characters or numbers.",
      });
  };
  const isLastNameValid = () => {
    if (lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/.test(lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUserNameValid = () => {
    if (username === "") return "Username cannot be empty...";
    if (!/^[a-zA-Z0-9](?:[a-zA-Z0-9_]{1,18}[a-zA-Z0-9])?$/.test(username))
      return "username cannot start with special characters";
  };
  return (
    <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
      <div className="space-y-2">
        <img src="logo.png" />
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>

        <Textfield
          name="firstname"
          value={firstname}
          onChange={handleChange}
          onBlur={isFirstNameValid}
          error={errors.firstnameError}
          required={true}
          label="First name"
          placeholder="John..."
        />
        <Textfield
          name="lastname"
          value={lastname}
          onChange={handleChange}
          // error={isLastNameValid}
          required={true}
          label="Last name"
          placeholder="Doe..."
        />
        <Textfield
          name="username"
          value={username}
          onChange={handleChange}
          // error={isUserNameValid}
          required={true}
          label="User Name"
          placeholder="Johndoe..."
        />
      </div>
      <div className="flex gap-2 my-10">
        {/* <Button onClick={handleNextStep} disabled={isHavingError()}>
          Next
        </Button> */}
      </div>
    </div>
  );
};
