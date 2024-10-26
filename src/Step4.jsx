import React from "react";

const Step4 = ({ formData, handleChange, prevStep }) => (
  <div className="border border-gray-300 p-8 rounded-lg shadow-lg max-w-md mx-auto bg-none/70 backdrop-blur-md">
    <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
      Comments
    </h2>

    <textarea
      placeholder="Your comments..."
      value={formData.comments}
      onChange={handleChange("comments")}
      className="w-full h-40 p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

    <div className="flex justify-between mt-6 space-x-4">
      <button
        onClick={prevStep}
        className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Back
      </button>
      <button
        onClick={() => alert("Form Submitted!")}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </div>
  </div>
);

export default Step4;
