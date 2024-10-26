import React from "react";

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => (
  <div className="border border-gray-300 p-8 rounded-lg shadow-lg max-w-md mx-auto bg-none/70 backdrop-blur-md">
    <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
      Additional Information
    </h2>

    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange("email")}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange("password")}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange("confirmPassword")}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <div className="flex justify-between space-x-4 mt-6">
      <button
        onClick={prevStep}
        className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Back
      </button>
      <button
        onClick={nextStep}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step2;
