import React, { useState } from 'react'
import YouTube from 'react-youtube'
import Slider from 'react-slick'
import logos from 'store/data/logos'

const Media = () => {
 const [play, setPlay] = useState(false)
 const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 668,
      settings: {
        slidesToShow: 2,
        rows: 4,
        slidesPerRow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
}
 return (
  <section className='media-section'>
   <div className='container-fluid'>
     <div className="col-lg-10 mx-auto px-0">
    <h2 className='media-title mb-2 col-md-6 mx-auto'>Paxful in the media</h2>
    <p className='media-content mb-4 col-md-8 mx-auto'>
     Paxful is very popular in the cryptocurrency space and has had extensive coverage in many famous magazines. One of our missions is to build 100 schools in Africa. Check out
     the video below to learn more about our <span className='media-content-link'>#builtwithbitcoin</span> initiative.
    </p>
<div className="media-video mb-5">
<div className={`video-container mx-auto ${play && 'hide'}`}>
     <span></span>
     <YouTube videoId={'KUqtlA0Joh0'} opts={{ width: '380', height: '214' }} onPlay={() => setPlay(!play)} />
    </div>
</div>
    <div className="media-slider mb-6">
   <Slider {...settings}>
   {logos.map((logo) => <div className='media-slider-slide-container'><a href='?' className='media-slider-slide'><img src={`/assets/${logo}.png`} alt={logo} className='media-logo'/></a></div>)}
        </Slider>
   </div>
   </div>
   </div>

  </section>
 )
}

export default Media
