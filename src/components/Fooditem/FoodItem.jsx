import React, { useContext} from 'react'
import './FoodItem.css'
import { assets1 } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
  
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            { !cartItems[id]
              ?<img src={assets1.add_icon_white} className='add' onClick={()=>addToCart(id)} alt=''/>
              :<div className='food-item-counter'>
                  <img onClick={()=>removeFromCart(id)} src={assets1.remove_icon_red} alt="" />
                  <p className='food-count'>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets1.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets1.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className="food-item-price"> ₹ {price}</p>
        </div>
    </div>
  )
}

export default FoodItem