import React from 'react'

const Icon = (props) => {
 return props.lg ? (
  <svg viewBox='0 0 48 48' className={`icon-lg ${props.name}`}>
   <use xlinkHref={`assets/menu-icons-sprite.svg#${props.name}`} />
  </svg>
 ) : props.md ? (
  <svg viewBox='0 0 32 32' className={`icon-md icon-${props.name}`}>
   <use xlinkHref={`assets/menu-icons-sprite.svg#${props.name}`} />
  </svg>
 ) : (
  <svg viewBox='0 0 16 16' className={`icon icon-${props.name}`} fill={props.color}>
   <use xlinkHref={`assets/sprite-paxful.svg#icon-${props.name}`} />
  </svg>
 )
}

export default Icon
