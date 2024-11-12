import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {

    const []

  return (
    <div className='explore-menu' id='emplore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>this is our menu eat agnd grab</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div bnCick={(n)} key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>

                    </div>
                )})}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
