import {useEffect, useRef, useState} from "react";
import './App.css';
import './flex.css';
import pink_flask from './assets/pink_flask.png';
import vid from './assets/exercise_vid.mp4'
import Header from './Header.js';
import ShopItem from './ShopItem.js';


function App() {
  const shopTopRef = useRef();
  const [itemsInBag, setItemsInBag] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);



  const setBagItems = (item) => {
    setItemsInBag([...itemsInBag, item]);
    console.log(`bag is ${itemsInBag}`);
  };

  const scrollToGear = () => {
    window.scrollTo({
      top:shopTopRef.current.offsetTop,
      behavior: 'smooth'
    });
  };
  
  
  return (
    <div className="App flex-column">
      {/* Nav header that overlays and transparent */}
      <Header handleBagClick={ setBagOpen } isOpen={bagOpen} items={itemsInBag}/>

      <div className="video-background">
        <video autoPlay loop muted playsInline>
            <source src={vid} type="video/mp4" />
        </video>
        <div className="content">
            <h1>Assessments Available</h1>
            <div className='flex-row jcontent-space-around'>
              <button className='button'>Need a trainer</button>
              <button className='button' onClick={scrollToGear}>Want some gear</button>
            </div>
            {/* <p>Here is some introductory text.</p> */}
        </div>
      </div>
      
      <div 
        className='panel1 flex-row jcontent-space-around aitems-center'
        ref={shopTopRef}
      >
        <p>Just Do It.</p>
        <p>Find the new you.</p>
        <p>SHOP ALL</p>
      </div>
      
      <div 
        className='flex-column'
      >
        <div className='flex-row'>
          <ShopItem key={1} addToCart={setBagItems}/>
          <ShopItem key={2} addToCart={setBagItems}/> 
        </div>
        <div className='flex-row'>
          <ShopItem key={3} addToCart={setBagItems}/>
          <ShopItem key={4} addToCart={setBagItems}/>
        </div>
      </div>
     
      <div 
        className='panel1 flex-row jcontent-space-around aitems-center'
      >
        <p>Just Do It.</p>
        <p>Find the new you.</p>
        <p>SHOP ALL</p>
      </div>

      {/* main page body */}
      <div className='products-page flex-column'>
        <h4>Wellness Product Name</h4>
        <img src={pink_flask} alt="pink water container"/>
        
        <p>Name of Product</p>
        <p>Description of the product. How it works and functions</p>

      </div>
    </div>
  );
}

export default App;
