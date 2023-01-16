
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Price } from './components/Price';
import { Review } from './components/Review';

function App() {
  return (
    <>
      <Home/>
      <Features/>
      <About/>
      <Review/>
      <Price/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
