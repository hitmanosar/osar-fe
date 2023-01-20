import React from "react";
import Nav from "./nav";
import "../style/pd.css";
import c1 from "../photo/c1.jpg";
import Side from "./side";
import All_list from "./all";
import "../style/side.css";

function Product() {
  return (
    <React.Fragment>
      <Nav />
      <div className="pd">
        <img src={c1} className="img img-fluid w-100 h-auto" alt="" srcset="" />

        <div className="container-fluid p-5 ">
          <div className="row border border-primary p-5">
            <div className="col mt-4">
              <h1>LOGO</h1>
            </div>

            <div className="col mt-4">
              <input type="text" placeholder="search here" />
            </div>
          </div>
        </div>
      </div>

      <div className="side  p-3">
        
      
      <Side/>
        
      
      <All_list/>




           
       
</div>

    </React.Fragment>
  );
}

export default Product;
