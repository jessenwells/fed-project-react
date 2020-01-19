import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import data from './data'
import Icon from './Icon'

const Widget = () => {
 const [tabSelect, setTabSelect] = useState(true)
 const [current, setCurrent] = useState('')
 const [value, setValue] = useState('')

 const handleTabs = () => setTabSelect(!tabSelect)

 const handleInput = (e) => {
  fetch(`https://www.blockchain.com/tobtc?currency=USD&value=${e.target.value.replace(',', '')}`)
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
  <div className='pax-app'>
   <Container fluid>
    <section className='pax-widget mb-6'>
     <Row className='justify-content-center'>
      <Col lg={10}>
       <div className='main-widget pt-lg-5'>
        <div className='buy-widget'>
         <div className='px-lg-5 px-0'>
          <Row>
           <Col lg={6} className='buy-widget-left'>
            <div className='flex-grow-1'>
             <div className='buy-widget-left-title d-xs-block'>Buy bitcoin with any payment method</div>
             <div className='buy-widget-left-tabs mt-3 d-xs-block'>
              <div className={`buy-widget-left-tab ${tabSelect && 'buy-widget-left-tab--selected'}`} onClick={handleTabs}>
               Popular payment methods in the usa
              </div>
              <div className={`buy-widget-left-tab ${!tabSelect && 'buy-widget-left-tab--selected'}`} onClick={handleTabs}>
               Popular on Paxful
              </div>
             </div>
             <div className='buy-widget-left-payment d-xs-block'>
              {tabSelect
               ? data.paymentList.slice(0, 6).map((pay, i) => <WidgetPayments title={pay[1]} icon={pay[2]} key={i} />)
               : data.paymentList.slice(6).map((pay, i) => <WidgetPayments title={pay[1]} icon={pay[2]} key={i} />)}
             </div>
             <div className='buy-widget-left-input'>
              <label htmlFor='' className='buy-widget-left-input-title'>
               Buy bitcoin with
              </label>
              <div className='buy-widget-left-input-search'>
               <span className='buy-widget-left-input-search-text'>Any payment method</span>
               <span className='buy-widget-left-input-search-cta widget-btn'>Show all</span>
              </div>
             </div>
             <i className='widget-icon-right'>
              <img src='assets/widget_arrow.svg' width='20px' height='30px' alt='icon' />
             </i>
            </div>
           </Col>
           <Col lg={6} className='buy-widget-right'>
            <div className='buy-widget-right-title'>
             Receive
             <img src='assets/widget_BTC_icon.svg' alt='Bitcoin icon' />
             bitcoin
            </div>
            <div className='buy-widget-right-input'>
             <label htmlFor='' className='buy-widget-right-input-title'>
              Amount you pay
             </label>
             <div className='buy-widget-right-input-amount'>
              <input type='text' className='buy-widget-right-input-amount-picker' placeholder='Any Amount' onChange={handleInput} />
              <button className='buy-widget-right-input-amount-cta btn btn-md btn-outline-primary widget-btn'>
               <div className='d-flex align-items-center text-nowrap'>
                Any currency
                <Icon name={'arrow-down'} color={'#00a5ef'} />
               </div>
              </button>
             </div>
             <div className='buy-widget-right-input-btc'>
              <label htmlFor='' className='buy-widget-right-input-title'>
               Amount you receive in BTC
              </label>
              <input type='text' className='buy-widget-right-input-btc-value' placeholder={value} />
             </div>
             <p className='buy-widget-right-current'>
              Current market price of bitcoin:
              <span>{current}</span>
             </p>
             <p className='buy-widget-right-current-help'>You can buy any fraction of a bitcoin</p>
            </div>
            <div className='buy-widget-right-search d-md-flex align-items-end'>
             <a href='/' className='buy-widget-right-search-button py2 btn btn-primary btn-lg d-flex flex-column align-items-center text-uppercase w-100'>
              <div>Search for offers</div>
              <small>and get bitcoin now</small>
             </a>
            </div>
           </Col>
          </Row>
         </div>
         <footer className='buy-widget-footer px-5'>
          <div className='buy-widget-stats'>
           <Row>
            <Col sm={6} md={3}>
             <div className='buy-widget-stats-stat'>
              <img src='assets/il_shield_lg_1.svg' alt='' />
              <span>Secured by escrow</span>
             </div>
            </Col>
            <Col sm={6} md={3}>
             <div className='buy-widget-stats-stat'>
              <img src='assets/il_customers_lg_1.svg' alt='' />
              <span>3 Million happy customers</span>
             </div>
            </Col>
            <Col sm={6} md={3}>
             <div className='buy-widget-stats-stat'>
              <img src='assets/il_bitcoinStar_lg_1.svg' alt='' />
              <span>Thousands of trusted offers</span>
             </div>
            </Col>
            <Col sm={6} md={3}>
             <div className='buy-widget-stats-stat'>
              <img src='assets/il_bitcoincoin_lg_1.svg' alt='' />
              <span>Billions in global volume</span>
             </div>
            </Col>
           </Row>
          </div>
         </footer>
        </div>
       </div>
      </Col>
     </Row>
    </section>
   </Container>
  </div>
 )
}

const WidgetPayments = (props) => {
 return (
  <div className='buy-widget-left-payment-item'>
   <img src={`/assets/${props.icon}.svg`} alt={props.title} />
   <div className='buy-widget-left-payment-item-textblock'>
    <div className='buy-widget-left-payment-item-text'>{props.title}</div>
   </div>
  </div>
 )
}

export default Widget
