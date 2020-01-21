import React, { useState } from 'react'
import Mobile from './components/Mobile'
import Header from './components/Header'
import Hero from './components/Hero'
import Widget from './components/Widget'
import Footer from './components/Footer'

function App() {
 const [mobileOpen, setMobileOpen] = useState(false)
 const handleMobile = () => setMobileOpen(!mobileOpen)
 
 return (
  <div className='App'>
   <Mobile mobileOpen={mobileOpen} />
   <Header mobileOpen={mobileOpen} handleMobile={handleMobile} />
   <main>
    <Hero />
    <Widget />
   </main>
   <Footer />
  </div>
 )
}

export default App
