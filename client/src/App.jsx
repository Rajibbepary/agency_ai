import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div className=" relative">
     <Navbar theme={theme} setTheme={setTheme}/>
     <Footer/>
    </div>
  );
};

export default App;