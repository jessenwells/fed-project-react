import React from 'react'
import Mobile from './components/Mobile'
import Header from './components/Header'
import Hero from './components/Hero'
import Widget from './components/Widget'
import Footer from './components/Footer'

function App() {
 return (
  <div className='App'>
   <Mobile />
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
