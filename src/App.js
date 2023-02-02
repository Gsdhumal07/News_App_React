
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';


function App() {
  return (
    <>
  <Navbar title="TextUtils" about ="about TextUtils"/>
  <div className='container my-' >
    <TextForm heading="Enter the text to analyze" />
  </div>
  <div className='container'>
  <About />   
  </div>
  </>
  );
}

export default App;
