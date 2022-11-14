import React from 'react'
import './Procedure.scss'
import icon from '../../assets/Vector.png'
import icon1 from '../../assets/Vector1.png'
import icon2 from '../../assets/Vector2.png'
import icon3 from '../../assets/Vector3.png'
import icon4 from '../../assets/vector4.png'
const Procedure = () => {
  return (
     <div className="how_it_work">
          <h2>How does it work ?</h2>
          <div className="procedure_wrapper">
          <div className="procedure">
            <div className="pro_icon">
              <img src={icon} alt="users" />
            </div>
            <div>
              <h4>Invite your friends</h4>
              <p>Share the link tutedude.com with
                  your friends</p>
            </div>
          </div>
          <div className="procedure">
            <div className="pro_icon">
            <img src={icon1} alt="users" />
            </div>
            <div>
              <h4>Friend purchases any course</h4>
              <p>Using your REFERRAL CODE in the payments page</p>
            </div>
          </div>
          <div className="procedure">
            <div className="pro_icon">
            <img src={icon4} alt="users" />
            </div>
            <div>
              <h4>You get ₹ 200 as referral money</h4>
              <p>On total purchase the friend makes, into your wallet</p>
            </div>
          </div>
          <div className="procedure">
            <div className="pro_icon">
            <img src={icon2} alt="users" />
            </div>
            <div>
              <h4>Your Friend gets ₹ 200 Off </h4>
              <p>On his overall fee on successful purchase using your referral code </p>
            </div>
          </div>
          <div className="procedure">
            <div className="pro_icon">
            <img src={icon3} alt="users" />
            </div>
            <div>
              <h4>Transfer money from wallet</h4>
              <p>When the wallet balance reaches
               ₹200 or more, you can withdraw it</p>
            </div>
          </div>
          </div>
     </div>
  )
}

export default Procedure
