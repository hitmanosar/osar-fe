import React from "react";
// import '../style/nav.css';

import {Link} from 'react-router-dom';



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
              <a> <Link className="al nav-item active" to='/'>Home</Link></a>
            </li>
            <li >
            <a ><Link className="al nav-item active" to='/product'>products</Link></a>
            </li>
            <li >
              <a ><Link className="al nav-item active" to='/about'>about</Link></a>
            </li>


            <li >
              <a ><Link className="al nav-item active" to='/content'>content</Link></a>
            </li>
          </ul>
            </div>
         </div>

        </div>   
     
     
    </React.Fragment>
  );
}

export default Nav;
