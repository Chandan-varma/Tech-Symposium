import React from "react";

export default function Uploads() {
  return (
<div className="container mx-auto px-4 py-2 flex justify-center">
      <form className="bg-white bg-opacity-10 backdrop-blur-md shadow-md px-8 py-6 mb-8 rounded-md relative overflow-hidden w-full max-w-lg mx-auto mt-4 min-h-[400px]">
        <h1 className="text-white pb-4 font-bold text-2xl text-center">Payment Details</h1>
        <div className="grid grid-cols-1 gap-6">
          {/* New File Input for Uploading Payment Proof */}
          <div className="mt-4">
            <img src="../../../public/QRcode.png" alt="QR Code" className="mt-2 w-32 h-32 mx-auto" />
          </div>
          <h3 className="text-white font-bold text-xl text-left">Upload the Payment Screenshot</h3>
          <div>
            <input
              type="file"
              accept=".png, .jpg, .jpeg, .pdf"
              className="w-full border-gray-300 border rounded-md px-3 py-2" 
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your transaction ID"
              className="w-full border-gray-300 border rounded-md px-3 py-2" 
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}




<div className="mt-4">
<img src="../../../public/QRcode.png" alt="QR Code" className="mt-2 w-32 h-32 mx-auto" />
</div>