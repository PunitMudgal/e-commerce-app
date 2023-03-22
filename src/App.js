import './App.css';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Store from './Pages/store/Store';
import Contact from './Pages/contact/Contact';
import ErrorPage from './Pages/errorPage/ErrorPage';
import Footer from './Components/footer/Footer';
//  api = https://api.pujakaitem.com/api/products;
function App() {
  return (
    <>
      <Router>
     <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      <Footer />  
     </Router> 
    </>
  );
}

export default App;
