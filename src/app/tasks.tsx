import React from 'react';
import Footer from '../components/Footer';

const Task = ({ date, month, time, status }) => {
  const getStatusColor = () => {
    if (status === 'ongoing') {
      return 'bg-green-500';
    } else if (status === 'ended') {
      return 'bg-red-500';
    } else {
      return 'bg-yellow-500';
    }
  };

  return (
    <div className={`bg-white rounded-md p-4 shadow-md mb-4`}>
      <div className="font-Nebula-Regular text-xl mb-2">{`Day ${date} ${month}`}</div>
      <div className="text-gray-500">{`Time Left: ${time}`}</div>
      <div className={`text-white rounded-md px-2 py-1 ${getStatusColor()} mt-2`}>
        {status}
      </div>
      <button className="block bg-black text-white mt-4 mx-auto px-4 py-2 rounded-md">
        Click to Join
      </button>
    </div>
  );
};

const Tasks: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-Nebula-Regular">
      <h1 className="text-3xl mb-6">Tasks</h1>
      <Task date="1" month="Jan" time="2 hours" status="ongoing" />
      <Task date="15" month="Jan" time="1 day" status="upcoming" />
      <Task date="28" month="Jan" time="5 hours" status="ended" />
      <Task date="10" month="Feb" time="3 days" status="ongoing" />
      <Task date="20" month="Feb" time="6 hours" status="upcoming" />
      <Footer />
    </div>
  );
};

export default Tasks;
