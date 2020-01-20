import { useState, useEffect } from 'react'

export const useWindow = () => {

 const [winLarge, setWinLarge] = useState()
 const [winMedium, setWinMedium] = useState()
 const [winTop, setWinTop] = useState()

 useEffect(() => {
  let lg = window.matchMedia('(max-width: 1200px)')
  const watchLg = (sz) => (sz.matches ? setWinLarge(false) : setWinLarge(true))
  lg.addListener(watchLg)
  watchLg(lg)

  let md = window.matchMedia('(max-width: 992px)')
  const watchMd = (sz) => (sz.matches ? setWinMedium(false) : setWinMedium(true))
  md.addListener(watchMd)
  watchMd(md)


  let startScroll = window.pageYOffset
  window.onscroll = () => {
   let currentScroll = window.pageYOffset
   startScroll > currentScroll ? setWinTop(false) : setWinTop(true)
   startScroll = currentScroll
  }


  // eslint-disable-next-line
 }, [])

 return winLarge && winMedium && winTop
}
