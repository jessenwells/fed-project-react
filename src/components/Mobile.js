import React from 'react'

const MobileMenu = ({ mobileOpen }) => (
  <div className='pax-app'>
   <div className={`mobile-menu-layout mobile-menu-layout--${mobileOpen ? 'show' : 'hide'}`}>
    <div className={`mobile-menu-container mobile-menu-container--${mobileOpen ? 'show' : 'hide'}`}>
     <h1>{`Mobile Menu ; )`}</h1>
    </div>
    <div className={`mobile-menu-backdrop mobile-menu-backdrop--${mobileOpen ? 'show' : 'hide'}`}></div>
   </div>
  </div>
 )

export default MobileMenu
