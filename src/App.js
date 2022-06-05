import './App.css';
import Header from './component/Header';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import ProductsPage from './component/ProductsPage';
import ContactPage from './component/ContactPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <main className='main'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
