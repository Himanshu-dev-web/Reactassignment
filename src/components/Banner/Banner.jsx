import React from 'react'
import "./Banner.css"
import { Fresh,Star4,Star3,Look,Twoktwo,Person ,Btnarrow} from "/src/components/App.js"


const Banner = () => {
  return (
    <>
        <div id="about" className='container'>
            <div className='banner-main'>
                {/* <h1>Fresh</h1> */}
                <h1><span><img src={Fresh} alt="" /></span></h1>
                <h1><span><img src={Twoktwo} alt="" /></span></h1>
                <h1><span><img src={Look} alt="" /></span></h1>
                <img className='star-3' src={Star3} alt="" />
                <img className='personimg' src={Person} alt="" />
                <hr />
                {/* <img className='banner-line' src="/asset/Line 23.svg" alt="" /> */}
                <img className='banner-star' src={Star4} alt="" />
                <div className='rectangle'></div>
                <button className='banner-btn'>See More <span><img className='btn-arrow' src={Btnarrow} alt="" /></span> </button>

            </div>
        </div>
    </>
  )
}

export default Banner