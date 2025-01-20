import React from 'react'
import Rightpanel from './Rightpanel'
import Leftpanel from './Leftpanel'


export default function Main(props) {
  return (
    
    <div className="content">
      <Leftpanel collapsed={props.collapsed}/>
        <main className="main-content">
          <h1>Welcome to LetsTour web page</h1>
        </main>
        <Rightpanel/>

      </div>
  )
}
