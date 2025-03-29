import { BrowserRouter as Router } from "react-router-dom";  // Import Router
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

import Report from "./Report";

function App() {
  return (
    <Router>  
      <Navbar /> 
      <Home/> 
      <Footer/> 
    
      <Report/>
    </Router>
  );
}

export default App;
