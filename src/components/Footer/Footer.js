import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
 return (
  <footer className='footer-section py-7 p-md-8'>
   <Container fluid className='text-center text-md-left'>
    <div className='d-flex flex-column flex-xs-row align-content-center justify-content-between align-items-left align-items-sm-center mb-4 mb-sm-6'>
     <a href='?' className='footer-logo'>
      <img src='assets/logo.svg' alt='logo' className='footer-logo-image' />
     </a>
    </div>
   </Container>
  </footer>
 )
}

export default Footer
