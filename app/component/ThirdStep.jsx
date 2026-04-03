import { useState } from "react";
import { Textfield } from "./Textfield";
import { Button } from "./Button";
import { Imgfield } from "../Imgfield";

export const ThirdStep = ({ formData, handleChange, handlePreviusStep }) => {
  const { birthday } = formData;
  return (
    <div className="w-120 min-h-[655px] bg-white rounded-lg p-8 shadow-xl">
      <div className="space-y-2">
        <img src="logo.png" />
        <h1 className="font-semibold text-2xl">Join Us! 😎</h1>
        <p className="text-lg text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>

        <Textfield
          type="date"
          name="birthday"
          value={birthday}
          onChange={handleChange}
          required={true}
          label="Date of Birth"
        />
        <Imgfield
          name="profileimg"
          value={birthday}
          onChange={handleChange}
          required={true}
          label="Profile image"
        />
      </div>
      <div className="flex gap-2 my-10">
        <Button onClick={handlePreviusStep}>Prev</Button>
      </div>
    </div>
  );
};
