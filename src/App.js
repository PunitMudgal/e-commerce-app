import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Store from "./Pages/store/Store";
import Contact from "./Pages/contact/Contact";
import ErrorPage from "./Pages/errorPage/ErrorPage";
import Footer from "./Components/footer/Footer";
import SingleProduct from "./Pages/singleProduct/SingleProduct";
import Cart from "./Pages/cart/Cart";
import { AuthContextProvider } from "./context/AuthContext";

//  api = https://api.pujakaitem.com/api/products;
function App() {
  return (
    <>
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          {/* path of singleProduct connected to every product user click on */}
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
