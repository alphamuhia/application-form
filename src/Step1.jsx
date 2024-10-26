import React from "react";

const Step1 = ({ formData, handleChange, nextStep }) => (
  <div className="border border-gray-300 p-8 rounded-lg shadow-lg max-w-md mx-auto bg-none/70 backdrop-blur-md">
    <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
      Personal Information
    </h2>

    <div className="space-y-4">
      <input
        type="text"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange("first_name")}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="text"
        placeholder="Second Name"
        value={formData.second_name}
        onChange={handleChange("second_name")}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange("age")}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    <button
      onClick={nextStep}
      className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Next
    </button>
  </div>
);

export default Step1;
