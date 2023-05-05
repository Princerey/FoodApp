import Navbar from '../Components/Navbar';
import Landing from '../Components/Landing';
import About from '../Components/About';
import Articles from '../Components/Articles';
import Footer from '../Components/Footer';
import Accord from '../Components/Accordian';


function App() {
  return (
 <>
 <Navbar/>
 <div id="Home">
 <Landing/>
 </div>
 <div id="About%20Us">
 <About/>
 </div>
 {/* <Accord/> */}
 <div id="Products">
 <Articles/>
 </div>
 <div id="foot">
 <Footer/>
 </div>
 </>
  );
}

export default App;
