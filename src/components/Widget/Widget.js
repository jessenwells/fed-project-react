import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import payments from 'store/data/payments'
import Icon from '../Icon'

const Widget = () => {
 const [tabSelect, setTabSelect] = useState(true)
 const [current, setCurrent] = useState('')
 const [value, setValue] = useState('')

 const handleTabs = () => setTabSelect(!tabSelect)

 const handleInput = (e) => {
  let val = e.target.value.replace(',', '')
  fetch(`https://www.blockchain.com/tobtc?currency=USD&value=${val}`)
   .then((res) => res.json())
   .then((data) => setValue(data))
 }

 const getCurrent = () => {
  fetch('https://blockchain.info/ticker')
   .then((res) => res.json())
   .then((data) =>
    setCurrent(
     `${data.USD.last.toLocaleString('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2
     })} USD`
    )
   )
 }

 useEffect(() => {
  getCurrent()
  // eslint-disable-next-line
 }, [])

 return (
  <section className='widget-section'>
   <Container fluid>
    <Row className='justify-content-center'>
     <Col lg={10}>
      <div className='widget-container pt-lg-5'>
       <div className='widget'>
        <div className='px-lg-5 px-0'>
         <Row>
          <LeftColumn tabSelect={tabSelect} handleTabs={handleTabs} />
          <RightColumn handleInput={handleInput} value={value} current={current} />
         </Row>
        </div>
        <Footer />
       </div>
      </div>
     </Col>
    </Row>
   </Container>
  </section>
 )
}

const LeftColumn = ({ tabSelect, handleTabs }) => {
 let tabA = payments.slice(0, 6)
 let tabB = payments.slice(6)

 return (
  <Col lg={6} className='widget-left'>
   <div className='flex-grow-1'>
    <div className='widget-left-title d-none d-xs-block'>Buy bitcoin with any payment method</div>
    <div className='widget-left-tabs mt-3 d-none d-xs-flex'>
     <div className={`widget-left-tab widget-left-tab--${tabSelect ? 'selected': ''}`} onClick={handleTabs}>
      Popular payment methods in the usa
     </div>
     <div className={`widget-left-tab widget-left-tab--${!tabSelect ? 'selected': ''}`} onClick={handleTabs}>
      Popular on Paxful
     </div>
    </div>
    <div className='widget-left-payments d-none d-xs-flex'>
     {tabSelect
      ? tabA.map((pay) => <Payments title={pay.title} icon={pay.icon} key={pay.id} />)
      : tabB.map((pay) => <Payments title={pay.title} icon={pay.icon} key={pay.id} />)}
    </div>
    <div className='widget-left-input'>
     <label htmlFor='' className='widget-left-input-title'>
      Buy bitcoin with
     </label>
     <div className='widget-left-input-search'>
      <span className='widget-left-input-search-text'>Any payment method</span>
      <span className='widget-left-input-search-cta widget-btn'>Show all</span>
     </div>
    </div>
    <i className='widget-icon-center md-hidden'>
     <img src='assets/widget_arrow.svg' width='20px' height='30px' alt='icon' />
    </i>
   </div>
  </Col>
 )
}

const RightColumn = ({ handleInput, value, current }) => (
 <Col lg={6} className='widget-right'>
  <div className='widget-right-title md-hidden'>
   Receive
   <img src='assets/widget_BTC_icon.svg' alt='Bitcoin icon' />
   bitcoin
  </div>
  <div className='widget-right-input'>
   <label htmlFor='' className='widget-right-input-title'>
    Amount you pay
   </label>
   <div className='widget-right-input-amount'>
    <input type='text' className='widget-right-input-amount-picker' placeholder='Any Amount' onChange={handleInput} />
    <button className='widget-right-input-amount-cta btn btn-md btn-outline-primary widget-btn'>
     <div className='d-flex align-items-center text-nowrap'>
      Any currency
      <Icon name={'arrow-down'} color={'#00a5ef'} />
      <Icon name={'burger'} color={'#00a5ef'} />
     </div>
    </button>
   </div>
   <div className='widget-right-input-btc md-hidden'>
    <label htmlFor='' className='widget-right-input-title'>
     Amount you receive in BTC
    </label>
    <input type='text' className='widget-right-input-btc--value' placeholder={value} />
   </div>
   <p className='widget-right-current md-hidden'>
    Current market price of bitcoin:
    <span>{current}</span>
   </p>
   <p className='widget-right-current-help md-hidden'>You can buy any fraction of a bitcoin</p>
  </div>
  <div className='widget-right-search d-md-flex align-items-end'>
   <a href='?' className='py-2 btn btn-primary btn-lg d-flex flex-column align-items-center text-uppercase w-100'>
    <div>Search for offers</div>
    <small>and get bitcoin now</small>
   </a>
  </div>
 </Col>
)

const Footer = () => (
 <footer className='widget-footer px-5'>
  <div className='widget-stats'>
   <Row>
    <Col sm={6} md={3}>
     <div className='widget-stats-stat'>
      <img src='assets/il_shield_lg_1.svg' alt='' />
      <span>Secured by escrow</span>
     </div>
    </Col>
    <Col sm={6} md={3}>
     <div className='widget-stats-stat'>
      <img src='assets/il_customers_lg_1.svg' alt='' />
      <span>3 Million happy customers</span>
     </div>
    </Col>
    <Col sm={6} md={3}>
     <div className='widget-stats-stat'>
      <img src='assets/il_bitcoinStar_lg_1.svg' alt='' />
      <span>Thousands of trusted offers</span>
     </div>
    </Col>
    <Col sm={6} md={3}>
     <div className='widget-stats-stat'>
      <img src='assets/il_bitcoincoin_lg_1.svg' alt='' />
      <span>Billions in global volume</span>
     </div>
    </Col>
   </Row>
  </div>
 </footer>
)

const Payments = (props) => (
 <div className='widget-left-payments-item'>
  <img src={`/assets/${props.icon}.svg`} alt={props.title} />
  <div className='widget-left-payments-item-textblock'>
   <div className='widget-left-payments-item-text'>{props.title}</div>
  </div>
 </div>
)

export default Widget
