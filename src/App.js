import "./App.css";
// import NavBar from "./Components/NavBar/NavBar";
// import Footer from "./Components/Footer/Footer";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import Profile from "./Pages/Profile/Profile";
import ReadMore from "./Pages/ReadMore/ReadMore";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    
      <div className="App">
      
      
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contactUs" element={<ContactUs />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/readMore" element={<ReadMore />} />
          </Routes>
        </Router>
        
      </div>
    </>
  );
}

export default App;
