import "./Header.css";
import logo from './assets/gymhut2.png'

export default function Header({ handleBagClick, isOpen, items }) {

    return(
        <>
            <div className='header flex-row jcontent-space-around aitems-center'>
                <button className='header-button'>About</button>
                <img src={logo} className="logo" />
                <button className='header-button' onClick={() => {handleBagClick(!isOpen)}}>Bag</button>
            </div>

            <div className={`bag ${isOpen ? 'open' : ''}`}>
                <div className="flex-column aitems-center w100perc h100perc">
                    <button className="header-button" onClick={() => {handleBagClick(!isOpen)}}>Close</button>
                    
                    {items.map((item, index) => (<p key={index}>{item[1]} <br/> {item[2]}</p>))}


{/* 
                    <p key={items[0][0]}>{items[1]}</p>
                    <p key={items[1][0]}>{items[2]}</p>
                    <p key={items[2][0]}>{items[3]}</p>
                    <p key={items[3][0]}>{items[4]}</p> */}
                </div>
            </div>
        </>
    );
}