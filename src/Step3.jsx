import React from "react";

const Step3 = ({ formData, handleChange, nextStep, prevStep }) => (
  <div className="border border-gray-300 p-8 rounded-lg shadow-lg max-w-md mx-auto bg-none/70 backdrop-blur-md">
    <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
      Emergency Contacts
    </h2>

    <div className="space-y-6">
      {/* First Emergency Contact */}
      <div>
        <label className="text-gray-600 font-medium">
          First Emergency Contact:
        </label>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.firstContactName}
          onChange={handleChange("firstContactName")}
          className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Relationship"
          value={formData.firstContactRelationship}
          onChange={handleChange("firstContactRelationship")}
          className="w-full mt-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={formData.firstContactPhone}
          onChange={handleChange("firstContactPhone")}
          className="w-full mt-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Second Emergency Contact */}
      <div>
        <label className="text-gray-600 font-medium">
          Second Emergency Contact:
        </label>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.secondContactName}
          onChange={handleChange("secondContactName")}
          className="w-full mt-2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Relationship"
          value={formData.secondContactRelationship}
          onChange={handleChange("secondContactRelationship")}
          className="w-full mt-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={formData.secondContactPhone}
          onChange={handleChange("secondContactPhone")}
          className="w-full mt-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-between mt-6">
      <button
        onClick={prevStep}
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        Back
      </button>
      <button
        onClick={nextStep}
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Next
      </button>
    </div>
  </div>
);

export default Step3;
