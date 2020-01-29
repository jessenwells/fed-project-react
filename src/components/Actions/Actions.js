import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import actions from 'store/data/actions'

const Actions = () => {
 const [tabSelect, setTabSelect] = useState(true)
 const handleTabs = () => setTabSelect(!tabSelect)

 let tabA = actions.slice(0, 6)
 let tabB = actions.slice(6)

 return (
  <section className='actions-section'>
   <Container fluid>
    <Col lg={10} className='mx-auto px-0 text-center'>
     <h2 className='actions-title mb-2 col-md-6 mx-auto'>Over 300 ways to buy and sell bitcoin</h2>
     <p className='actions-subtitle col-md-8 mx-auto mb-4'>
      Select a payment method you like and trade directly with other people just like you!
     </p>
     <div className='actions-tabs mb-md-5 mb-4 d-flex d-md-inline-flex'>
      <div
       className={`actions-tabs-tab actions-tabs-tab-sell mr-md-2 actions-tab--${tabSelect ? 'selected' : ''}`}
       onClick={handleTabs}
      >
       Sell Bitcoin
      </div>
      <div
       className={`actions-tabs-tab actions-tabs-tab-buy ml-md-2 actions-tab--${!tabSelect ? 'selected' : ''}`}
       onClick={handleTabs}
      >
       Buy Bitcoin
      </div>
     </div>
     <Row className='actions-cards'>
      {tabSelect
       ? tabA.map((card) => (
          <Card icon={card.icon} title={card.title} content={card.content} active={card.active} key={card.id} />
         ))
       : tabB.map((card) => (
          <Card icon={card.icon} title={card.title} content={card.content} badges={card.badges} key={card.id} />
         ))}
     </Row>
     <a href='?' className='btn btn-primary btn-lg mt-3 mt-md-2 d-block d-md-inline-block'>
      View all offers
     </a>
    </Col>
   </Container>
  </section>
 )
}

const Card = (props) => (
 <Col md={6} lg={4} className='mb-2 mb-md-4'>
  <a href='?' className={`actions-cards-card p-3 p-md-4 ${props.active}`}>
   <div className='card-top flex-md-column align-items-md-start'>
    <img className='card-top-icon mb-sm-2' src={`/assets/action-${props.icon}.svg`} alt={props.title} />
    <strong className='card-top-title ml-3 ml-md-0 mb-0 mb-sm-1'>{props.title}</strong>
   </div>
   {props.badges && (
    <ul className='list-unstyled d-none d-md-flex flex-row flex-wrap mb-0'>
     {props.badges.map((item) => (
      <li className='card-badge mb-1 mr-2'>{item}</li>
     ))}
    </ul>
   )}
   <p className='card-content mt-1 mb-0 d-none d-sm-block'>{props.content}</p>
   {props.active && <span className='action-card-soon'>Coming Soon</span>}
  </a>
 </Col>
)

export default Actions
