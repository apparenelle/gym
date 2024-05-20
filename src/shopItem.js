import React, { useState } from 'react';
import pink_flask from './assets/pink_flask.png';
import action_shot from './assets/action_shot.jpg';
import './ShopItem.css';

export default function ShopItem() {
    const name = "Hydroflask";
    const cost = 44;
    const colors = ["pink", "green", "blue"];
    const imageDefault = pink_flask;
    const imageInUse = action_shot;
    const stats = ["800mL / 16oz", "bacteria resistant"];

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            className="shop-item flex-row jcontent-center flex-grow-1 item-wrapper" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            
            <div className="item-info">
                <div className="flex-row jcontent-space-between">
                    <p>{name}</p>
                    <p>{colors.length} Colors</p>
                </div>
                <div className="flex-row jcontent-space-between aitems-center">
                    <p>${cost}</p>
                    <div className="flex-row">
                        {colors.map((color, index) => (
                            <div
                            key={index}
                            className="variant-colors"
                            style={{ backgroundColor: color }}
                            ></div>
                        ))}
                    </div>
                </div>
            <img 
                // src={isHovered ? imageInUse : imageDefault} 
                src={imageDefault}
                alt={name} 
                className="item-image"
            />

            </div>
            {isHovered && (
                <button className="add-to-cart" onClick={() => console.log(`${name} added to cart`)}>Add to Cart</button>
            )}
        </div>
    );
}
