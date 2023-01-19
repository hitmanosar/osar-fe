import React from "react";
import '../style/nav.css';


function Nav() {


  
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

      
      

<div className="w-80 p-2 navs" >
         
         <div className="row d-flex flex-column flex-lg-row flex-md-column  text-center">
            <div className="col mt-2">
                {/* <img src={l1} width={25+'%'} alt="" /> */}
                <h1>LOGO</h1>
            </div>

            <div className="col mt-2">
            <ul className="uls">
            <li >
              <a aria-current="page" href="#">Home</a>
            </li>
            <li >
              <a href="#">About</a>
            </li>
            <li >
              <a  href="#">Services</a>
            </li>


            <li >
              <a  href="#">Content</a>
            </li>
          </ul>
            </div>
         </div>

        </div>   
     
     
    </React.Fragment>
  );
}

export default Nav;
