import './App.css';
import pink_flask from './assets/pink-flask.jpg';
import logo from './assets/gym_nut.png'
import vid from './assets/exercise_vid.mp4'

function App() {
  
  
  return (
    <div className="App">
      
      {/* Nav header that overlays and transparent */}
      <div className='header flex-row jcontent-space-around aitems-center'>
        <button className='button'>About</button>
        <img src={logo} className="logo" />
        <button className='button'>Bag</button>
      </div>

      <div class="video-background">
        <video autoPlay loop muted playsInline>
            <source src={vid} type="video/mp4" />
        </video>
        <div class="content">
            {/* <h1>Welcome to My Website</h1>
            <p>Here is some introductory text.</p> */}
        </div>
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
