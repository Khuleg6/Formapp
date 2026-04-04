import React from "react";

export const Complete = () => {
  return (
    <div className="w-120  bg-white rounded-lg p-8 shadow-xl">
      <div className="space-y-2">
        <img src="logo.png" />
        <h1 className="font-semibold text-2xl">You're All Set 🔥 </h1>
        <p className="text-lg text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
