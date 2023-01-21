import React from "react";
import Nav from "./nav";
import "../style/pd.css";
import c1 from "../photo/c1.jpg";
import Side from "./side";
import items from "../list";

import "../style/side.css";
import Model from "./model";
import Search from "./search";


function Hair() {


 

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

        <div className="right border border-primary px-5 py-2">
          <div className="row  d-flex flex-column flex-lg-row flex-md-column ccs_row align-items-center justify-content-evenly">
          {items
            .filter((two) => {
              return two.type == "hair";
            })
            .map((one) => {
              return (
                <div
                  className=" col-12 col-lg-5 col-md-12 col-sm-12 p-0 mt-5"
                  key={one.id}
                >
                  <div class="card ccs">
                    <div className="d-flex flex-column flex-lg-row flex-md-column p-3  text-sm-start justify-content-around  align-items-center">
                      <div>
                        <img
                          src={one?.photo}
                          style={{ width: 100 + "px", height: 100 + "%" }}
                          alt=""
                        />
                      </div>
                      <div >
                        <h1> {one.name} </h1>
                        <p className="mt-3 ap p-3">
                          {" "}
                          {one.detail} is Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Rem, eaque? Iusto id magnam, sint
                          accusantium numquam totam nulla, necessitatibus nam
                          amet exercitationem ipsam molestias distinctio, quod
                          iste quisquam vero earum.{" "}
                        </p>
                      </div>
                    </div>

                    <button className="btn btn-primary  my-3 mx-5">$400</button>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
        <br />
        </div>
     
      </div>
    </React.Fragment>
  );
}

export default Hair;
