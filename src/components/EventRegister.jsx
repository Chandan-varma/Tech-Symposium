import React from "react";
import Button from "./Button";

const Event_Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl text-center">Register for TechSymposium Event</h1>
        <form className="flex flex-col mt-4">
          {/* Event Title */}
          <input
            type="text"
            placeholder="Event Title"
            className="p-2 mb-2 rounded"
            required
          />
          {/* Event Description */}
          <textarea
            placeholder="Event Description"
            className="p-2 mb-2 rounded"
            rows="4"
            required
          />
          {/* Pricing */}
          <input
            type="text"
            placeholder="Pricing"
            className="p-2 mb-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Venue"
            className="p-2 mb-2 rounded"
            required
          />
          {/* Event/Community Logo Input (Image) */}
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="p-2 mb-2 rounded"
            required
          />
          <label className="text-gray-500 mb-2">
            Upload Event or Community Logo (PNG, JPG)
          </label>
          {/* Head Number */}
          <input
            type="text"
            placeholder="Co-ordinator Number"
            className="p-2 mb-2 rounded"
            required
          />
          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="p-2 mb-2 rounded"
            required
          />
          {/* Submit Button */}
          <Button className="hidden lg:flex">
          Register
        </Button>
        </form>
      </div>
    </div>
  );
};

export default Event_Register;
