import { useState } from "react";
import { StepperContext } from "../contexts/StepperContext";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import Application from "./steps/Application";
import Uploads from "./steps/Uploads";
import Payment from "./steps/Payment";

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = ["Personal", "Payment", "Confirm"];

  const displaySteps = (step) => {
    switch (step) {
      case 1: return <Application />;
      case 2: return <Uploads />;
      case 3: return <Payment />;
      default: return null; // Handle default case
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className="my-10 p-10">
      <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData }}>
        <Stepper steps={steps} currentStep={currentStep} />
        {displaySteps(currentStep)}
      </StepperContext.Provider>
      <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default StepperForm;
