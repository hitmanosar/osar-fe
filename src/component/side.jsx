import React from "react";
import h5 from "../photo/h5.jpg";
import "../style/side.css";

import All_list from "./all";
import { useState } from "react";
import { Link } from "react-router-dom";

function Side() {

  const [type,settype] = useState('');






  return (
    <React.Fragment>

<style type="text/css">
        {`
  .als{
    border: 1px solid blue;
    width: 150px;
    transition: all 1s;
   
}

 .als:hover{
    transform: scale(1.1,1.1);
}
 



    
    `}
      </style>

      {/* <div className="side  p-3">
        <div className="left border border-primary text-center"> */}
         {/* <p className="mt-2">All Products</p>
          <p className="mt-2">Hair Care</p>
          <p className="mt-2">Skin Care</p>
          <p className="mt-2">Body Care</p>
          <p className="mt-2">Daily Wash</p>  */}
 <div className="left border border-primary text-center">
          <Link className="als btn btn-primary text-white  nav-item active mt-2" to="/product">
        All Products
      </Link>
      <Link className="als btn btn-primary text-white nav-item active mt-2" to="/hair">
      Hair Care
      </Link>
      <Link className="als btn btn-primary text-white   nav-item active mt-2" to="/skin">
      Skin Care
      </Link>
      <Link className="als btn btn-primary text-white nav-item active mt-2" to="/body">
      Body Care
      </Link>

      <Link className="als btn btn-primary text-white nav-item active mt-2" to="/collagen">
      Collagen
      </Link>

      <Link className="als btn btn-primary text-white  nav-item active mt-2" to="/daily">
      Daily Wash
      </Link>


      </div>
    </React.Fragment>
  );
}

export default Side;
