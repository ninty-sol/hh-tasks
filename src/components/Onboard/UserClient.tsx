import React from 'react';
import Link from 'next/link';

const UserClient: React.FC = () => {
  return (
    <Link href="/connect">
      <div className="bg-transparent text-white font-semibold py-2 px-4 rounded-md border-white border hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
        Next
      </div>
    </Link>
  );
};

export default UserClient;

