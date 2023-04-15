import React ,{useContext} from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import HOC from '../../img/hoc.png'
import Music from '../../img/musicapp.png'
import Ecom from '../../img/ecommerce.png'
import { themeContext } from '../../Context'
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        {/* Heading */}
        <span style={darkMode?{color:"white"}:null}>Recent Project</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className='portfolio-slider'
        >
            <SwiperSlide>
             <img src={Sidebar} alt="" />    
            </SwiperSlide>
            <SwiperSlide>
             <img src={HOC} alt="" />    
            </SwiperSlide>
            <SwiperSlide>
             <img src={Music} alt="" />    
            </SwiperSlide>
            <SwiperSlide>
             <img src={Ecom} alt="" />    
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}

export default Portfolio