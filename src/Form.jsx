import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    personal_address: "",
    home_address: "",
    work_address: "",
    full_name: "",
    phone_number: "",
    relationship: "",
    comments: "",
  });

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Step4
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
        />
      );
    default:
      return <div>Form completed!</div>;
  }
};

export default Form;
