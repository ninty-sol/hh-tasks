"use client";
import React, { useState } from "react";
import "../../app/fonts.css";
import UserClient from "./UserClient";

const UserServer: React.FC = () => {
  const [name, setName] = useState("");
  const [twitter, setTwitter] = useState("");
  const [nameError, setNameError] = useState(false);
  const [twitterError, setTwitterError] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleTwitterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTwitter(event.target.value);
    setTwitterError(false);
  };

  const handleNextClick = () => {
    if (name.trim() === "") {
      setNameError(true);
    }
    if (twitter.trim() === "") {
      setTwitterError(true);
    }

    if (name.trim() !== "" && twitter.trim() !== "") {
      // Handle data storage or other actions here
      // Redirect to the next page if needed
      // Example: window.location.href = '/connect';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen font-Nebula-Regular">
      <div className={`mb-6 ${nameError ? 'border-red-500' : ''}`}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border rounded-md px-4 py-2 w-80 focus:outline-none focus:ring focus:border-blue-300 custom-placeholder"
          required
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className={`mb-6 ${twitterError ? 'border-red-500' : ''}`}>
        <input
          type="text"
          placeholder="Your Twitter"
          className="border rounded-md px-4 py-2 w-80 focus:outline-none focus:ring focus:border-blue-300 custom-placeholder"
          required
          value={twitter}
          onChange={handleTwitterChange}
        />
      </div>
      <UserClient onClick={handleNextClick} />
    </div>
  );
};

export default UserServer;
