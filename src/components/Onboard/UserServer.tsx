import React from "react";
import "../../app/fonts.css"
import UserClient from "./UserClient";

const UserServer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-Nebula-Regular">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border rounded-md px-4 py-2 w-80 focus:outline-none focus:ring focus:border-blue-300 custom-placeholder"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Twitter"
          className="border rounded-md px-4 py-2 w-80 focus:outline-none focus:ring focus:border-blue-300 custom-placeholder"
        />
      </div>
      <UserClient />
    </div>
  );
};

export default UserServer;
