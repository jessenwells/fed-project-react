import React from 'react'
import { Dropdown, Button } from 'react-bootstrap'
import languages from 'store/data/languages'
import Icon from 'components/Icon'

const MobileMenu = ({ mobileOpen, language, handleLang }) => {
 return (
  <div className={`mobile-menu mobile-menu--${mobileOpen ? 'show' : 'hide'}`}>
   <div className={`mobile-menu-container mobile-menu-container--${mobileOpen ? 'show' : 'hide'}`}>
    <MobileDropdown language={language} handleLang={handleLang} />
    <nav className='mobile-nav'>
     {mobileLeft}
     {mobileRight}
    </nav>
   </div>
   <div className={`mobile-menu-backdrop mobile-menu-backdrop--${mobileOpen ? 'show' : 'hide'}`}></div>
  </div>
 )
}

const mobileLeft = (
 <ul className='mobile-nav-left list-unstyled'>
  <li className='mx-3 mx-sm-0'>
   <a href='?' className='mobile-nav-item active'>
    <Icon lg name={'buyIcon'} />
    <span>
     <strong className='mobile-nav-text'>Buy Bitcoin</strong>
     <span className='mobile-nav-subtext'>Search for offers to buy bitcoin</span>
    </span>
    <span className='icon-wrap ml-auto'>
     <Icon name='arrow-right' color='#a9a9a9' />
    </span>
   </a>
  </li>
  <li className='mx-3 mx-sm-0'>
   <a href='?' className='mobile-nav-item'>
    <Icon lg name={'sellIcon'} />
    <span>
     <strong className='mobile-nav-text'>Sell Bitcoin</strong>
     <span className='mobile-nav-subtext'>Sell and spend your bitcoin</span>
    </span>
    <span className='icon-wrap ml-auto'>
     <Icon name='arrow-right' color='#a9a9a9' />
    </span>
   </a>
  </li>
  <li className='mx-3 mx-sm-0'>
   <a href='?' className='mobile-nav-item'>
    <Icon lg name={'createOfferIcon'} />
    <span>
     <strong className='mobile-nav-text'>Create an offer</strong>
     <span className='mobile-nav-subtext'>Set your own offer terms</span>
    </span>
    <span className='icon-wrap ml-auto'>
     <Icon name='arrow-right' color='#a9a9a9' />
    </span>
   </a>
  </li>
 </ul>
)

const mobileRight = (
 <div className='mobile-nav-right'>
  <ul className='mobile-nav-right-list list-unstyled'>
   <li>
    <a href='?' className='mobile-nav-right-item'>
     <span className='icon-wrap'>
      <Icon name='arrow-right' color='#848484' />
     </span>
     Wallet
    </a>
   </li>
   <li>
    <a href='?' className='mobile-nav-right-item'>
     <span className='icon-wrap'>
      <Icon name='arrow-right' color='#848484' />
     </span>
     Become a Vendor
    </a>
   </li>
   <li>
    <a href='?' className='mobile-nav-right-item'>
     <span className='icon-wrap'>
      <Icon name='arrow-right' color='#848484' />
     </span>
     Chat Support
    </a>
   </li>
  </ul>
 </div>
)

const MobileDropdown = ({ language, handleLang }) => (
 <div className='d-block mx-3 mb-3 dropdown'>
  <Dropdown className='mobile-menu-dropdown' onSelect={(e) => handleLang(e)}>
   <Dropdown.Toggle as={Button} variant='link'>
    <Icon name='globe' color='#848484' />
    {language}
    <Icon name='arrow-down' color='#848484' />
   </Dropdown.Toggle>
   <Dropdown.Menu show={false}>
    <ul className='dropdown-menu-body list-unstyled'>
     {languages.map((lang, i) => (
      <Dropdown.Item eventKey={lang} key={i} className={language === lang && 'current'}>
       {lang}
      </Dropdown.Item>
     ))}
    </ul>
   </Dropdown.Menu>
  </Dropdown>
 </div>
)

export default MobileMenu
