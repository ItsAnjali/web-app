import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [scale, setScale] = useState(1);

  /*
  width=window.innerwidth*scale
  */ 
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
      {/* Navbar */}
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>

      <div className="content">
        {/* Left Menu */}
        <div className={`left-menu ${collapsed ? "collapsed" : ""}`}>
          <ul>
            <li>
              <i className="fas fa-home"></i> Dashboard
            </li>
            <li>
              <i className="fas fa-user"></i> Profile
            </li>
            <li>
              <i className="fas fa-envelope"></i> Messages
            </li>
            <li>
              <i className="fas fa-cogs"></i> Settings
            </li>
            <li>
              <i className="fas fa-sign-out-alt"></i> Logout
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <main className="main-content">
          <h1>Welcome to AnnyBrand's Advanced Responsive Webpage</h1>
          <p>This page adapts beautifully to different screen sizes with enhanced UI/UX elements.</p>
        </main>

        {/* Right Panel */}
        <div className="right-panel">
          <h2>Recent Activities</h2>
          <div className="activity">
            <img src="https://dhramshala.in/wp-content/uploads/2023/10/prem-mandir.jpg" alt="Activity 1" />
            <p>Added a new product listing</p>
          </div>
          <div className="activity">
            <img src="https://wandersky.in/wp-content/uploads/2023/08/Untitled-design-24.png" alt="Activity 2" />
            <p>Updated settings</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">© 2025 AnnyBrand. All rights reserved.</footer>
    </div>
  );
};

export default App;
