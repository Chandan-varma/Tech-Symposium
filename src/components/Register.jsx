import React from "react";
import StepperForm from "./StepperForm"; // Import the new StepperForm component

const Register = () => {
  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md relative z-10">
        {/* Add Top and Bottom Margin */}
        <div className="mt-20 mb-20"> {/* mt-8 for top margin and mb-8 for bottom margin */}
          <StepperForm /> {/* Use the StepperForm here */}
        </div>
      </div>
    </div>
  );
};

export default Register;
