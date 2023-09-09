import React from 'react';
import NinetyLogo from '../components/NintyLogo';
import Footer from '../components/Footer';
import UserServer from '../components/Onboard/UserServer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <NinetyLogo />
          <UserServer />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
