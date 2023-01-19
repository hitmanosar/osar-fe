import React from "react";
import Nav from "./nav";
import Carousel from "./carousel";
import Main from "./main";
import Client from "./client";
import Content from "./content";
import Footer from "./footer";

function Home(){

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

    return(
        <React.Fragment>
            <Nav/>
            <Carousel/>
           
           <Main/>

           <Client/>

           <Content/>

           <Footer/>

        </React.Fragment>
    )
}

export default Home;