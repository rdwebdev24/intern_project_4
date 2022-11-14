import React from "react";
import './Referal_wallet.scss'
const Referal_wallet = () => {
  return (
    <div className="referalcode-wallet">
      <div className="referal">
        <p>Your Referal Code</p>
        <div className="referal-code">EDCH54</div>
      </div>
      <div className="wallet">
        <p>Wallet Balance</p>
        <p style={{color:"#000"}}> ₹ 500</p>
      </div>
    </div>
  );
};

export default Referal_wallet;
