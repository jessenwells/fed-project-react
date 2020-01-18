import React from 'react'
import MobileMenu from './components/MobileMenu'
import Header from './components/Header'
import Hero from './components/Hero'
import Widget from './components/Widget'
import Footer from './components/Footer'

function App() {
 return (
  <div className='App'>
   <MobileMenu />
   <Header />
   <main>
    <Hero />
    <Widget />
   </main>
   <Footer />
  </div>
 )
}

export default App
