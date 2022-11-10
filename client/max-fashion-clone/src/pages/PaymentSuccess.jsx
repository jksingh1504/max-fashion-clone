import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <div style={{textAlign:"center"}}>
        <br /><br /><br /><br /><br />
        <h2 style={{position:'relative',zIndex:"1",color:"#4fbb90",fontWeight:"800"}}>Payment Successful</h2>
        <img style={{maxHeight:"80vh",width:"80vh",margin:"-100px auto 0px"}} src="https://cdn.dribbble.com/users/282075/screenshots/4756095/icon_confirmation.gif" alt="" />
        <Link to="/?page=women"><button style={{padding:"10px 20px 12px",color:'white',backgroundColor:"#303ab2",borderRadius:"3px"}}>Continue Shopping</button></Link>
    </div>
  )
}

export default PaymentSuccess