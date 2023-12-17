import React from 'react'
import './Theme.css'



const Theme = () => {
  return (<>
  <div className="content-box">
    <h4>SelectTheme</h4>
  </div>

  <div className="theme-options">
  <div id='theme-white'></div>
    <div id='theme-black'></div>
    <div id='theme-blue' className='active'></div>
  
  

  </div>
    

    </>
  )
}

export default Theme;