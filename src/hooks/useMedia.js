import { useState, useEffect } from 'react'

export const useMedia = () => {
 const [winLarge, setWinLarge] = useState()

 useEffect(() => {
  let lg = window.matchMedia('(max-width: 1200px)')
  const watchLg = (sz) => (sz.matches ? setWinLarge(false) : setWinLarge(true))
  lg.addListener(watchLg)
  watchLg(lg)
  // eslint-disable-next-line
 }, [])

 return winLarge
}
