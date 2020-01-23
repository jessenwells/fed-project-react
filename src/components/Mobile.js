import React from 'react'
import { Dropdown, Button } from 'react-bootstrap'
import data from '../store/data'
import Icon from './Icon'

const MobileMenu = ({ mobileOpen }) => (
 <div className={`mobile-menu mobile-menu--${mobileOpen ? 'show' : 'hide'}`}>
  <div className={`mobile-menu-container mobile-menu-container--${mobileOpen ? 'show' : 'hide'}`}>
    {mobileDropdown}
   <nav className='mobile-nav'>
    {mobileLeft}
    {mobileRight}
   </nav>
  </div>
  <div className={`mobile-menu-backdrop mobile-menu-backdrop--${mobileOpen ? 'show' : 'hide'}`}></div>
 </div>
)

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

const mobileDropdown = (
  <div className='d-block mx-3 mb-3 dropdown'>
  <Dropdown className='mobile-menu-dropdown'>
   <Dropdown.Toggle as={Button} variant='link'>
    <Icon name='globe' color='#848484' />
    English
    <Icon name='arrow-down' color='#848484' />
   </Dropdown.Toggle>
   <Dropdown.Menu show={false}>
    <ul className='dropdown-menu-body list-unstyled'>
     {data.langList.map((lang, i) => (
      <a href='/' className={`${i === 0 && 'current'} dropdown-item `} key={i}>
       {lang}
      </a>
     ))}
    </ul>
   </Dropdown.Menu>
  </Dropdown>
 </div>
)


export default MobileMenu
