import React from "react";

const Application = ({ formValues, onChange }) => {
  const events = [
    { value: "techTalk", label: "Tech Talk" },
    { value: "workshop", label: "Workshop" },
    { value: "networking", label: "Networking Session" },
  ];

  return (
    <div className="container mx-auto px-4 py-2 flex justify-center">
      <form className="bg-white bg-opacity-10 backdrop-blur-md shadow-md px-8 py-6 mb-8 rounded-md relative overflow-hidden w-full max-w-lg mx-auto mt-4 min-h-[400px]">
        <h1 className="text-white pb-4 font-bold text-2xl text-center">Student Details</h1>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <input
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              id="fullName"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <input
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              id="email"
              placeholder="Email"
              autoComplete="true"
              required
            />
          </div>
          <div>
            <input
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              id="contactNumber"
              placeholder="Phone Number"
              required
            />
          </div>
          <div>
            <input
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              id="collegeName"
              placeholder="College Name"
              required
            />
          </div>
          <div>
            <select
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              id="year"
              required
            >
              <option value="" disabled hidden>
                Select Year of Study
              </option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
          <div>
            <select
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              name="event"
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Select Event to Participate
              </option>
              {events.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Application;
