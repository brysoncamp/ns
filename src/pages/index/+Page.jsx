import { useState } from 'react'
import './Page.css'

export function Page() {

  return (
    <>
      <div className="landing">
        <h1 className="landing-hook">
          Find your perfect <br />
          domain 
          <span className="boxed-text">
            <span className="highlight-text">in seconds</span>
          </span> 
        </h1>
        <h2 className="landing-description">Our AI rapidly searches thousands of domain names to help you secure the best available option.</h2>
      </div>
      <div style={{ height: '2000px' }}></div>
    </>
  )
}
