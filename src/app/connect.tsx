import React from "react";
import ConnectWallet from "../components/Onboard/ConnectWallet";
import Footer from "@/components/Footer";

const ConnectPage: React.FC = () => {
  return (
    <div>
      <div>
        <ConnectWallet />
      </div>
      <Footer />
    </div>
  );
};

export default ConnectPage;
