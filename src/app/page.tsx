import React from 'react';
import NinetyLogo from '../components/NintyLogo';
import Footer from '../components/Footer';
import UserServer from '../components/Onboard/UserServer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mt-4">
        <NinetyLogo />
      </div>
      <UserServer />
      <Footer />
    </div>
  );
};

export default Home;

