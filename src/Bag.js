import './Bag.css'

export default function Bag({ isOpen, items, handleBagClick }) {
    return(
        <div className={`bag flex-column ${isOpen ? 'open' : ''}`}>
            <div className="flex-column flex-grow-1 flex-shrink-1">
                <button className="close-button" onClick={() => {handleBagClick(!isOpen)}}>Close</button>
                
                <div className='bag-list flex-column flex-grow-1 flex-shrink-1'>
                    {items.map((item, index) => (
                        <div className='bag-item'>
                            <div key={index} className='flex-row jcontent-space-around aitems-center'>
                                <img className='bag-item-img' src={item['image']}></img>
                                <p>{item['name']}</p>
                                <p>${item['cost']}</p>
                            </div>
                            <div key={index} className='flex-row jcontent-space-around aitems-center'>
                                <p>-</p>
                                <p>{item['quantity']}</p>
                                <p>+</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {items.length > 0 ? (<button id="checkout-button" className="button">Checkout</button>) : (<></>)}
        </div>
    );
};