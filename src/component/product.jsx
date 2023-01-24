import React from "react";
import Nav from "./nav";
import "../style/pd.css";
import c2 from "../photo/c2.jpg";
import Side from "./side";
import All_list from "./all";
import "../style/side.css";
import Model from "./model";
import Search from "./search";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "./loader";

function Product() {

  const [loads, setloads] = useState(true);

  useEffect(() => {
    console.log("loading finished");

    setTimeout(() => {
      setloads(false);
    }, 1000);
  }, []);

  if (loads == true) {
    return (
      <React.Fragment>
        <Loader/>
      </React.Fragment>
    );
  }


else{  return (
    <React.Fragment>
      <Nav />
      <div className="pd">
        <img src={c2} className="img img-fluid w-100 h-auto" alt="" srcset="" />

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
}

export default Product;
