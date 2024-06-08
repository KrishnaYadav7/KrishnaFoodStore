import React from 'react'
import './Footer.css'
import { assets1 } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets1.logo} alt="" className='logoimg'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quia distinctio explicabo omnis, fugit, minus cumque ut atque architecto ex dolores perferendis repudiandae rerum! Minima voluptatem quae aliquam beatae amet.</p>
                <div className="footer-social-icons">
                   <img src={assets1.facebook_icon} alt="" /><img src={assets1.twitter_icon} alt="" /><img src={assets1.linkedin_icon} alt="" /> 
                </div>
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+919076960386</li>
                    <li>krixna@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='copyright'>Copyright 2024 © Krishna.com. All Right Reserved.</p>
    </div>
  )
}

export default Footer