
import React from 'react'

export default function Navbar(props) {
  return (

    <nav className="navbar">
        <div className="logo">LetsTour</div>
        <button className="menu-toggle" onClick={() => props.setCollapsed(!props.collapsed)}>
          {props.collapsed ? "Expand" : "Collapse"}
        </button>
      </nav>
  );
}
