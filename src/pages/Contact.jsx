import React from "react";

function Contact() {
  return (
    <div className="bg-white p-8 rounded shadow-md max-w-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Contact Us</h1>

      <p className="text-gray-700 mb-6">
        If you have any questions or feedback, feel free to send us a message.
      </p>

      <form className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">Name</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Message
          </label>
          <textarea
            rows="4"
            className="w-full border rounded px-3 py-2 focus:outline-blue-500"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
