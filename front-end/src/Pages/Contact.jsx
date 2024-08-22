import React, { useState } from "react";
import "./ContactPage.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-me">
      <h1 className="text-xl font-bold mb-8">Contact Me</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="font-bold text-gray-600" htmlFor="name">
            Name:
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label className="font-bold text-gray-600" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label className="font-bold text-gray-600" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          ></textarea>
        </div>
        <div
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md flex justify-center w-full cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
