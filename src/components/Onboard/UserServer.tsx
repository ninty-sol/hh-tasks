import React, { useState } from "react";
import "../../app/fonts.css";
import UserClient from "./UserClient";

const UserServer: React.FC = () => {
  const [name, setName] = useState("");
  const [twitter, setTwitter] = useState("");

  const handleNextClick = () => {
    const userData = {
      name: name,
      twitter: twitter,
    };

    console.log(userData);

    setName("");
    setTwitter("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen font-Nebula-Regular">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border rounded-md px-4 py-2 w-80 focus:outline-none focus:ring focus:border-blue-300 custom-placeholder"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Twitter"
          className="border rounded-md px-4 py-2 w-80 focus:outline-none focus:ring focus:border-blue-300 custom-placeholder"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        />
      </div>
      <button onClick={handleNextClick}>Next</button>
      <UserClient />
    </div>
  );
};

export default UserServer;
