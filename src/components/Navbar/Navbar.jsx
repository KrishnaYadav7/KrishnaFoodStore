import React, { useContext, useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/admin_assets/assets';
import { assets1 } from '../../assets/frontend_assets/assets';
import {StoreContext} from '../../context/StoreContext'
import {Link } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] =useState("menu");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='Navbar'>
        <Link to='/'><img src={ assets.logo} alt="" className="logo" /></Link>
        <ul className='nav-bar-menu'>
            <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>Moile-App</a>
            <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets1.search_icon} alt="" className='search-img'/>
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets1.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?'':"dot"}></div>

            </div>  
            <button onClick={()=>setShowLogin(true)}>Sign in</button>     
        </div>

    </div>
  )
}

export default Navbar