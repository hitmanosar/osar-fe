import React from "react";
import Nav from "./nav";
import "../style/ab.css";
import h3 from "../photo/h3.jpg";
import Footer from "./footer";

import h1 from '../photo/h1.jpg';
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function About() {



  let nav = document.querySelector(".navs");

  let nav_bar = document.querySelector('.navbar-nav');
  
  let nav_link = document.querySelector('.nav-link');
  
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      nav.style['background-color'] = '#e6e7e8';
     
    } else {
      // nav.classList.remove("bgg");
      nav.style['background-color'] = 'transparent';
    }
  });

  return (
    <React.Fragment>
      <div>
        <Nav />
        <div className="container ab">
          <h1 className="text-center "> We Care Your Beauty, Feme!!!</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea
            quam assumenda unde quia? Maxime et molestiae rem amet fugiat quas
            assumenda nemo fuga praesentium iste, illo sit tempore quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus
            amet dolores iusto doloremque eos. Corrupti eius eveniet iure
            repellendus, sunt quasi necessitatibus a rerum, eaque cumque placeat
            maiores ullam!
          </p>
          <br />
          <img
            src={h3}
            className="img img-fluid border border-danger"
            width={100 + "%"}
            alt=""
          />
        </div>

          
          <div className="mt-5">
          <Swiper
        slidesPerView={3}
        spaceBetween={50}
        slidesPerGroup={3}
        loop={true}
        speed={2000}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={h1} className='border border-primary' alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={h1} className='border border-primary' alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={h1} className='border border-primary' alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={h1}  className='border border-primary' alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={h1} className='border border-primary' alt="" srcset="" /></SwiperSlide>
        <SwiperSlide><img src={h1} className='border border-primary' alt="" srcset="" /></SwiperSlide>
        
      </Swiper>
          </div>
         
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default About;
