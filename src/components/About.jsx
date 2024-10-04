import React from "react";
const About = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md">
          <h1 className="text-2xl text-center">Register for TechSymposium</h1>
          {/* Add your registration form or any content here */}
          <form className="flex flex-col mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 mb-2 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 mb-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="p-2 mb-2 rounded"
              required
            />
            <button type="submit" className="mt-2 bg-blue-500 text-white rounded p-2">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default About;