import React from 'react'
import FriendEnrolled from './FriendEnrolled'
import Navbar from './Navbar'
import Referal_wallet from './Referal_wallet'
import './Screen1.scss'
const Screen1 = () => {
  return (
    <>
      <Navbar/>
        <div className="friend_refer_wrapper">
          <div style={{paddingTop:'2rem'}}>UI/UX {`>`} Refer & earn {`>`} Friends Refered</div>
          <Referal_wallet/>
          <FriendEnrolled/>
          <p className='terms_condition'>Terms & Condition</p>
        </div>
    </>
  )
}

export default Screen1
