"use client";
import { useState } from "react";
import { Button } from "./Button";
import { Textfield } from "./Textfield";

export const SecondStep = ({
  handlePreviusStep,
  formData,
  handleChange,
  handleNextStep,
}) => {
  const { email, phonenumb, password, confirmpass } = formData;

  const isEmailValid = () => {
    if (email === "") return "Email cannot be empty...";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      return "Email is wrong.";
  };

  const isPhoneNumValid = () => {
    if (phonenumb === "") return "Phone number cannot be empty...";
    if (!/^[987]\d{7}$/.test(phonenumb))
      return "Phone number must be start with 7 or up to 9.";
  };
  const isPasswordValid = () => {
    // 1. Хоосон эсэхийг шалгах
    if (password === "") return "Password cannot be empty...";

    // 2. Уртыг шалгах (хамгийн багадаа 8 тэмдэгт)
    if (password.length < 8)
      return "Password must be at least 8 characters long.";

    // 3. Жижиг үсэг орсон эсэхийг шалгах
    if (!/[a-z]/.test(password))
      return "At least one lowercase letter is required.";

    // 4. Том үсэг орсон эсэхийг шалгах
    if (!/[A-Z]/.test(password))
      return "At least one uppercase letter is required.";

    // 5. Тоо орсон эсэхийг шалгах
    if (!/\d/.test(password)) return "At least one number is required.";

    // Хэрэв бүх нөхцөл биелсэн бол юу ч буцаахгүй (undefined)
    return null;
  };
  const isConfirmPassValid = () => {
    if (confirmpass === "") return "Please confirm your password.";
    if (confirmpass !== password) return "Passwords do not match.";
    return null;
  };
  const isHavingError = () => {
    return isEmailValid() || isPhoneNumValid() || isPasswordValid();
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
          name="email"
          value={email}
          onChange={handleChange}
          error={isEmailValid}
          required={true}
          label="Email"
          placeholder="John@edu.mn"
        />
        <Textfield
          name="phonenumb"
          value={phonenumb}
          onChange={handleChange}
          error={isPhoneNumValid}
          required={true}
          label="Enter Phone Number"
          placeholder="88888888"
        />
        <Textfield
          name="password"
          value={password}
          onChange={handleChange}
          error={isPasswordValid}
          required={true}
          label="Password"
          type="password"
        />
        <Textfield
          name="confirmpass"
          value={confirmpass}
          error={isConfirmPassValid}
          onChange={handleChange}
          required={true}
          type="password"
          label="Confirm Password"
        />
      </div>
      <div className="flex gap-2 my-10">
        <Button onClick={handlePreviusStep} disabled={false}>
          Prev
        </Button>
        <Button onClick={handleNextStep} disabled={isHavingError()}>
          Next
        </Button>
      </div>
    </div>
  );
};
