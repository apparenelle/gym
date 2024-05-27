import React, { useState } from 'react';
import pink_flask from './assets/pink_flask.png';
import action_shot from './assets/action_shot.jpg';
import './ShopItem.css';

export default function ShopItem({key, addToCart}) {
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
            className={`shop-item flex-row jcontent-center flex-grow-1  ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={key}
        >
            {!isHovered ? (
                <div className="item-info item-wrapper flex-column">
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
                        src={imageDefault} 
                        alt={name} 
                        className="item-image"
                    />
                </div>
            ) : (
                <div className='flex-column flex-grow-1'>
                    <img 
                        src={imageInUse} 
                        alt={name} 
                        className="item-image-hover flex-grow-9 flex-shrink-1"
                    />
                    <button 
                        className="add-to-cart flex-grow-1 flex-shrink-1" 
                        onClick={() => {addToCart([key, name, cost]);console.log(`${name} added to cart`)}}
                        // aria-label={`Add ${name} to cart`}
                    >
                        QUICK ADD
                    </button>
                </div>
            )}
        </div>
    );
}












// import React, { useState } from 'react';
// import pink_flask from './assets/pink_flask.png';
// import action_shot from './assets/action_shot.jpg';
// import './ShopItem.css';

// export default function ShopItem(props) {
//     const name = "Hydroflask";
//     const cost = 44;
//     const colors = ["pink", "green", "blue"];
//     const imageDefault = pink_flask;
//     const imageInUse = action_shot;
//     const stats = ["800mL / 16oz", "bacteria resistant"];

//     const [isHovered, setIsHovered] = useState(false);

//     const handleMouseEnter = () => {
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };
    
//     if (!isHovered){
//         return (
//             <div 
//                 className="shop-item flex-row jcontent-center flex-grow-1 item-wrapper" 
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 key={props.key}

//             >
                
//                 <div className="item-info flex-column">
//                     <div className="flex-row jcontent-space-between">
//                         <p>{name}</p>
//                         <p>{colors.length} Colors</p>
//                     </div>
//                     <div className="flex-row jcontent-space-between aitems-center">
//                         <p>${cost}</p>
//                         <div className="flex-row">
//                             {colors.map((color, index) => (
//                                 <div
//                                 key={index}
//                                 className="variant-colors"
//                                 style={{ backgroundColor: color }}
//                                 ></div>
//                             ))}
//                         </div>
//                     </div>
//                 <img 
//                     src={imageDefault} 
//                     // src={imageDefault}
//                     alt={name} 
//                     className="item-image"
//                 />
    
//                 </div>                
//             </div>
//         );
//     } else {
//         return(
            
//             <div className='flex-column'
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 key={props.key}
//             >
//                 <img 
//                     src={imageInUse} 
//                     // src={imageDefault}
//                     alt={name} 
//                     className="item-image"
//                 />
                    
//                 <button className="add-to-cart" 
//                         onClick={() => console.log(`${name} added to cart`)}
//                 >Add to Cart</button>

//             </div>
                
//         );
//     }
    
// }
