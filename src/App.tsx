import Hero from './components/Hero';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <>
      <Hero score={10}/>
      <Navbar />
    </>
  )
}

export default App;
