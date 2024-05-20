import './App.css';
import './flex.css';
import pink_flask from './assets/pink_flask.png';
import logo from './assets/gymhut2.png'
import vid from './assets/exercise_vid.mp4'
import ShopItem from './ShopItem.js';


function App() {
  
  return (
    <div className="App">
      
      {/* Nav header that overlays and transparent */}
      <div className='header flex-row jcontent-space-around aitems-center'>
        <button className='button'>About</button>
        {/* <h3 className='logo'>GYM NUT</h3> */}
        <img src={logo} className="logo" />
        <button className='button'>Bag</button>
      </div>

      <div className="video-background">
        <video autoPlay loop muted playsInline>
            <source src={vid} type="video/mp4" />
        </video>
        <div className="content">
            {/* <h1>Welcome to My Website</h1>
            <p>Here is some introductory text.</p> */}
        </div>
      </div>
      
      <div className='flex-row jcontent-space-around aitems-center panel1'>
        <p>Just Do It.</p>
        <p>Find the new you.</p>
        <p>SHOP ALL</p>
      </div>
      
      <div className='flex-row'>
        <ShopItem key={1}/>
        <ShopItem key={2}/>
        
        <ShopItem key={3}/>
        <ShopItem key={4}/>
      </div>
     
      <div className='flex-row jcontent-space-around aitems-center panel1'>
        <p>Just Do It.</p>
        <p>Find the new you.</p>
        <p>SHOP ALL</p>
      </div>

      {/* main page body */}
      <div className='products-page flex-column'>
        <h4>Wellness Product Name</h4>
        <img src={pink_flask} alt="pink water container"/>
        
        <>Name of Product</>
        <p>Description of the product. How it works and functions</p>

      </div>
    </div>
  );
}

export default App;
