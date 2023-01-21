import React from "react";
import Nav from "./nav";
import "../style/pd.css";
import c1 from "../photo/c1.jpg";
import Side from "./side";
import All_list from "./all";
import "../style/side.css";
import Model from "./model";
import Search from "./search";

function Product() {
  return (
    <React.Fragment>
      <Nav />
      <div className="pd">
        <img src={c1} className="img img-fluid w-100 h-auto" alt="" srcset="" />

       <Search/>
      </div>

      <Model/>

      <div className="side  p-3 ">
        <Side />

        <All_list />
      </div>
    </React.Fragment>
  );
}

export default Product;
