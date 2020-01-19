import React, { useState, useEffect } from 'react'
import data from './data'
import { Dropdown, Button, ButtonGroup } from 'react-bootstrap'

const Header = () => {
 const [isLg, setIsLg] = useState()

 let lg = window.matchMedia('(max-width: 1200px)')
 const watchLg = (sz) => (sz.matches ? setIsLg(false) : setIsLg(true))
 lg.addListener(watchLg)

 let authBlock

 isLg
  ? (authBlock = (
     <div className='header-menu-profile-account'>
      <a href='?' className='header-menu-profile-account-register'>
       Create account
      </a>
      <a href='?' className='header-menu-profile-account-signin btn btn-secondary d-xl-flex'>
       Log in
       <Icon name={'profile'} color='#ffffff' />
      </a>
     </div>
    ))
  : (authBlock = (
     <div className='header-menu-profile-account'>
      <a href='?' className='header-menu-profile-account-register'>
       Get Started
      </a>
      <Dropdown>
       <div className='dropdown-menu--show'>
        <Dropdown.Toggle variant='secondary' className='header-menu-profile-account-signin d-xl-flex'>
         <Icon name={'profile'} color='#ffffff' />
        </Dropdown.Toggle>

        <Dropdown.Menu show={true} className='profile-signin'>
         <ul className='dropdown-menu-body list-unstyled'>
          <li className='d-block'>
           <Dropdown.Item as='a' className='dropdown-menu-item'>
            <Icon name={'signInIcon'} med />
            Sign in
           </Dropdown.Item>
          </li>
          <li className='d-block'>
           <Dropdown.Item as='a' className='dropdown-menu-item'>
            <Icon name={'createAccountIcon'} med />
            Create Account
           </Dropdown.Item>
          </li>
         </ul>
        </Dropdown.Menu>
       </div>
      </Dropdown>
     </div>
    ))

 useEffect(() => {
  watchLg(lg)
  // eslint-disable-next-line
 }, [])

 return (
  <div className='pax-app'>
   <header id='navbar' className='header'>
    <div className='header-placeholder'></div>
    <div className='header-container'>
     <div className='container-fluid'>
      <div className='header-top'>
       <div className='header-top-bmenu'>
        <button className='bmenu js-mobile-menu-btn' type='button'>
         <span className='bmenu-line mt-0'></span>
         <span className='bmenu-line'></span>
         <span className='bmenu-line'></span>
        </button>
       </div>
       <a href='?' className='header-logo'>
        <svg className='header-logo-image' viewBox='0 0 124 24'>
         <path d={data.logoSvg[1]} fill='#454c59'></path>
         <path d={data.logoSvg[2]} fill='#00a5ef'></path>
        </svg>
       </a>
       <nav className='header-menu'>
        <ul className='list-unstyled d-flex align-items-center'>
         <li className='header-menu-item'>
          <Dropdown as={ButtonGroup}>
           <Button variant='primary'>Buy Bitcoin</Button>
           <div className='dropdown-menu--show'>
            <Dropdown.Toggle split variant='primary'>
             <Icon name={'arrow-down'} color={'#ffffff'} />
            </Dropdown.Toggle>
            <Dropdown.Menu show={true}>
             <ul className='dropdown-menu-body list-unstyled'>
              <li className='d-block'>
               <Dropdown.Item as='a' className='dropdown-menu-item-wide'>
                <Icon name={'buyIcon'} big />
                <span className='pr-2'>
                 <strong>Sell Bitcoin</strong>
                 <span className='dropdown-menu-subtext'>Sell and spend your bitcoin</span>
                </span>
                <span className='icon-wrap ml-auto'>
                 <Icon name='arrow-right' color='#a9a9a9' />
                </span>
               </Dropdown.Item>
              </li>
              <li className='d-block'>
               <Dropdown.Item as='a' className='dropdown-menu-item-wide'>
                <Icon name={'sellIcon'} big />
                <span className='pr-2'>
                 <strong>Sell Bitcoin</strong>
                 <span className='dropdown-menu-subtext'>Sell and spend your bitcoin</span>
                </span>
                <span className='icon-wrap ml-auto'>
                 <Icon name='arrow-right' color='#a9a9a9' />
                </span>
               </Dropdown.Item>
              </li>
              <li className='d-block'>
               <Dropdown.Item as='a' className='dropdown-menu-item-wide'>
                <Icon name={'createOfferIcon'} big />
                <span className='pr-2'>
                 <strong>Sell Bitcoin</strong>
                 <span className='dropdown-menu-subtext'>Sell and spend your bitcoin</span>
                </span>
                <span className='icon-wrap ml-auto'>
                 <Icon name='arrow-right' color='#a9a9a9' />
                </span>
               </Dropdown.Item>
              </li>
             </ul>
            </Dropdown.Menu>
           </div>
          </Dropdown>
         </li>
         <li className='header-menu-item'>
          <a href='?' className='header-menu-item-link'>
           Sell Bitcoin
          </a>
         </li>
         <li className='header-menu-item'>
          <a href='?' className='header-menu-item-link'>
           Wallet
          </a>
         </li>
         <li className='header-menu-item'>
          <a href='?' className='header-menu-item-link'>
           Become a Vendor
          </a>
         </li>
        </ul>
       </nav>
       <nav className='header-menu-profile'>
        {authBlock}
        <div className='header-menu-profile-language'>
         <Dropdown className='dropdown-menu-language'>
          <Dropdown.Toggle as={Button} variant='link' className='dropdown-menu-language-button'>
           <Icon name='globe' color='#848484' />
           English
           <Icon name='arrow-down' color='#848484' />
          </Dropdown.Toggle>
          <Dropdown.Menu show={false}>
            <ul className="dropdown-menu-body list-unstyled">
           {data.langList.map((lang, i) => (
<li><a href="/" className={`${i === 0 && 'current'} dropdown-item `}>{lang}</a></li>
           ))}
           </ul>
          </Dropdown.Menu>
         </Dropdown>
        </div>
       </nav>
      </div>
     </div>
    </div>
   </header>
  </div>
 )
}

const Icon = (props) => {
 return props.big ? (
  <svg viewBox='0 0 48 48' className={`icon-lg ${props.name}`}>
   <use xlinkHref={`assets/menu-icons-sprite.svg#${props.name}`} />
  </svg>
 ) : props.med ? (
  <svg viewBox='0 0 32 32' className={`icon-md icon-${props.name}`}>
   <use xlinkHref={`assets/menu-icons-sprite.svg#${props.name}`} />
  </svg>
 ) : (
  <svg viewBox='0 0 16 16' className={`icon icon-${props.name}`} fill={props.color}>
   <use xlinkHref={`assets/sprite-paxful.svg#icon-${props.name}`} />
  </svg>
 )
}

export default Header
