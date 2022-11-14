import React from 'react'
import Navbar from '../Screen1/Navbar'
import Account_code from './Account_code'
import Procedure from './Procedure'
import './Screen2.scss'
const Screen2 = () => {
  return (
    <>
      <Navbar/>
      <div className="refer_earn_wrapper">
        <div style={{paddingTop:'2rem'}}>UI/UX {`>`} Refer & earn {`>`} Friends Refered</div>
        <Account_code/>
        <Procedure/>
        <div className="footer">
          <p>Friends Who Enrolled</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </>
  )
}

export default Screen2