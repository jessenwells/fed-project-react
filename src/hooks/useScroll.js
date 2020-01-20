import { useState, useEffect } from 'react'

export const useScroll = () => {
 const [winTop, setWinTop] = useState(Boolean)

 useEffect(() => {

  let startScroll = window.pageYOffset

  window.onscroll = () => {
   let currentScroll = window.pageYOffset
   startScroll > currentScroll ? setWinTop(false) : setWinTop(true)
  
   startScroll = currentScroll
  }

  // eslint-disable-next-line
 }, [])

 return winTop
}



