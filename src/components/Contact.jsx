import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen pt-20 pb-20"> {/* Adjust min-height and padding */}
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md relative overflow-hidden w-full max-w-md"> {/* Set max width */}
        {/* Description */}
        <h1 className="text-2xl text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-4">
          We’d love to hear from you! Please fill out the form below with any
          questions, comments, or feedback.
        </p>

        {/* Contact Form */}
        <form className="flex flex-col mt-4 animate-slide-in">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 mb-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 mb-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-2 mb-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
          <Button className="hidden lg:flex">
          Send Message
        </Button>
        </form>

        {/* Top right corner cut-out */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-50 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
      </div>
    </div>
  );
};

export default Contact;
