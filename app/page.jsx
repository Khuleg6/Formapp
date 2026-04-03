"use client";
import { useState } from "react";
import { FirstStep } from "./component/FirstStep";
import { SecondStep } from "./component/SecondStep";
import { ThirdStep } from "./component/ThirdStep";

export default function Home() {
  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumb: "",
    password: "",
    confirmpass: "",
    birthday: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((step) => ({
      ...step,
      [name]: value,
    }));
  };
  const steps = [FirstStep, SecondStep, ThirdStep];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePreviusStep = () => {
    setStep(step - 1);
  };
  const StepForm = steps[step];
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm
        formData={formData}
        handleChange={handleChange}
        handleNextStep={handleNextStep}
        handlePreviusStep={handlePreviusStep}
      />
    </div>
  );
}
