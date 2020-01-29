import React from 'react'
import { Container, Col } from 'react-bootstrap'

const Start = () => {
 return (
  <section className='start-section'>
   <Container fluid>
    <Col lg={10} className='mx-auto px-0'>
     <article className='start-container text-center'>
      <h2 className='start-title mb-2 col-md-6 mx-auto'>Start trading on Paxful</h2>
      <p className='start-content mb-4 col-md-8 mx-auto'>
       Sign up today to receive your free digital wallet. You can immediately start buying or selling bitcoin, hassle-free.
      </p>
      <p className='mb-0'>
       <a href='?' class='btn btn-primary btn-lg d-block d-xs-inline-block'>
        Let's get started
       </a>
      </p>
     </article>
    </Col>
   </Container>
  </section>
 )
}

export default Start
