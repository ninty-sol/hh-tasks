import React from 'react';

const ConnectWallet: React.FC = () => {
  const handleConnectWallet = () => {
    // wallet connection
    // When the button is clicked, the handleConnectWallet function is called
    console.log('Connecting Solana wallet...');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleConnectWallet}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
      >
        Connect Solana Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;
