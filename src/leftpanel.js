import React from 'react'

export default function Leftpanel(props) {
  return (
    <div className={`left-menu ${props.collapsed ? "collapsed" : ""}`}>
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
  )
}
