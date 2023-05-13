import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

import './App.css';
import movies from './mock/movies.mock';

function App() {
  return (
    <>
      <Hero score={10}/>
      <Navbar />
      <Carousel title='Filmes' data={movies}/>
      <Carousel title='Filmes' data={movies}/>
    </>
  )
}

export default App;
