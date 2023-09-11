import React from 'react';

interface UserClientProps {
  onClick: () => void;
}

const UserClient: React.FC<UserClientProps> = ({ onClick }) => {
  return (
    <div
      className="bg-transparent text-white font-semibold py-2 px-4 rounded-md border-white border hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300 transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      Next
    </div>
  );
};

export default UserClient;
