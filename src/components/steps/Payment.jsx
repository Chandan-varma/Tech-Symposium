import React from "react";

export default function Payment() {
  const studentDetails = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    collegeName: "ABC University",
    yearOfStudy: "3",
    eventParticipating: "Tech Talk",
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-white-700 pt-4 font-bold text-2xl text-center">Thank you for your registration!</h1>
      
      <div className="bg-white bg-opacity-10 backdrop-blur-md shadow-md px-8 py-6 mb-8 rounded-md relative overflow-hidden w-full max-w-lg mx-auto mt-4 min-h-[400px]">
        <h3 className="text-white-700 font-bold text-lg flex justify-center pb-5">Student Details</h3>
        <p className="text-gray-300"><strong>Full Name:</strong> {studentDetails.fullName}</p>
        <p className="text-gray-300"><strong>Email:</strong> {studentDetails.email}</p>
        <p className="text-gray-300"><strong>Phone Number:</strong> {studentDetails.phoneNumber}</p>
        <p className="text-gray-300"><strong>College Name:</strong> {studentDetails.collegeName}</p>
        <p className="text-gray-300"><strong>Year of Study:</strong> {studentDetails.yearOfStudy}</p>
        <p className="text-gray-300"><strong>Event Participating:</strong> {studentDetails.eventParticipating}</p>
      </div>
    </div>
  );
}
