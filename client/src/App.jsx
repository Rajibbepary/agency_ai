import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className="dark:bg-black relative">
     <Navbar theme={theme} setTheme={setTheme}/>
     <Footer/>
    </div>
  );
};

export default App;