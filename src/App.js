import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import "./App.css";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992 && width <= 1600) setScale(0.9);
      else if (width >= 700 && width < 992) setScale(0.8);
      else if (width >= 600 && width < 700) setScale(0.75);
      else if (width <= 600) setScale(0.5);
      else setScale(1);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app" style={{ transform: `scale(${scale})` }}>
      
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>
      
      <Main collapsed={collapsed}/>
      <footer className="footer">© 2025 LetsTour.</footer>
    </div>
  );
};

export default App;
