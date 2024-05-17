import { useEffect, useState } from 'react';
import pink_flask from './assets/pink_flask.png';
import action_shot from './assets/action_shot.jpg'

import './ShopItem.css';

export default function ShopItem() {
    var name = "hydroflask";
    var cost = 44;
    var colors = ["pink", "green", "blue"];
    var image = pink_flask;
    var action_photo = action_shot;
    var stats = ["800mL / 16oz", "bacteria resistant"];
   
    const [isHovered, setIsHovered] = useState(false);


   var itemStyle = {
    width: `20%`,
    backgroundImage: `url(${image})`,
    backgroundSize: `90%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
   };
    // img
    // name
    // cost
    // color
    // stats

    useEffect(() => {}, [])
    return(
        <>
            <div style={ itemStyle } 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} 
        className='shop-item flex-column flex-grow-1'>
            <div className='item-wrapper'>
                <div className='flex-row jcontent-space-between'>
                    <p>{name}</p>
                    <p>{colors.length} Colors</p>
                </div>
                <div className='flex-row jcontent-space-between aitems-center'>
                    <p>${cost}</p>
                    <div className='flex-row'>
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className='color'
                                style={{ backgroundColor: color }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {isHovered && (
        <div className='hover-content flex-grow-1'>
            <img src={action_photo} alt='Action' className='action-photo' />
            <button className='add-to-cart'>Quick Add</button>
        </div>
        )}
        </>
        
    );
}