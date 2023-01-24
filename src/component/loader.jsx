import React from "react";
import '../style/loader.css';
import Nav from "./nav";

function Loader(){
    return(
        <React.Fragment>
          <Nav />
        <div className="container d-flex align-items-center justify-content-center text-center  p-5 rounded">
        <div class="loader"></div>
        </div>
       

        </React.Fragment>
    )
}


export default Loader;