import "./Header.css";
import Bag from "./Bag.js";
import logo from './assets/gymhut2.png';

export default function Header({ handleBagClick, isOpen, items }) {

    return(
        <>
            <div className='header flex-row jcontent-space-around aitems-center'>
                <button className='header-button'>About</button>
                <img src={logo} className="logo" />
                <button className='header-button' onClick={() => {handleBagClick(!isOpen)}}>{items.length===0 ? 'Bag' : `Bag (${items.length})`}</button>
            </div>

            <Bag isOpen={isOpen} handleBagClick={handleBagClick} items={items} />
        </>
    );
}