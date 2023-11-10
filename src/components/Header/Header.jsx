
import styles from "./Header.module.css";

import React from 'react';

function Header() {
  return (
    <>
     <nav className={styles.navigation}>
             
             

             <div className="logo">   
                 
                 <img src="/images/Baghchal-logo.png" alt="logo" />
             </div>
             <div className="links">
                 <ul>
                     <li><a href="">Home</a></li>
                     <li><a href="">Rules</a></li>
                     <li><a href="">Play Game</a></li>
                 </ul>
             </div>
             
             
          
             {/* container */}
            
            
 
            
         </nav>
         </>
   
  )
}

export default Header;




