import './App.css';
import Header from './component/Header';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import ProductPage from './component/ProductPage';
import ContactPage from './component/ContactPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

function App() {

  const [ toggle, setToggle ] = useState(false);
  const styles = useSpring({ opacity: toggle ? 1 : 0 });

  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    handleToggle()
  }, []);

  return (
    <Router> 
      <animated.div className="App" style={styles}>
        <Header />
        <main className='main'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Products" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </animated.div>
    </Router>
  );
}

export default App;
