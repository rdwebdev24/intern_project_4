import React from "react";
import './Account_code.scss'
const Account_code = () => {
  return (
    <div className="account-code">
      <div className="account_info_wrapper">
        <div className="account-info">
          <div>
            <p>Referal Earning</p>
            <p>$ 2,500</p>
          </div>
          <div>
            <p>Total Referal</p>
            <p>7</p>
          </div>
          <div>
            <p>Walltet Balance</p>
            <p>$ 500</p>
          </div>
        </div>
        <button className="withdraw">Withdraw Balance</button>
      </div>
      <div className="referal">
        <h3>Your Referal Code</h3>
        <div className="referal-code">
          <p>EDCH54</p>
        </div>
      </div>
    </div>
  );
};

export default Account_code;
