import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className="dark:bg-black relative">
     <Navbar theme={theme} setTheme={setTheme}/>
     <Hero/>
     <TrustedBy/>
     <Services/>
     <Footer/>
    </div>
  );
};

export default App;