import React from "react";
import Nav from "./nav";
import "../style/pd.css";
import c1 from "../photo/c1.jpg";
import Side from "./side";
import items from "../list";

import "../style/side.css";

function Skin() {
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
        <Side />

        <div className="right border border-primary p-5">
          <div className="row  d-flex flex-row  justify-content-around   align-items-center">
            {items
              .filter((two) => {
                return two.type == "skin";
              })
              .map((one) => {
                return (
                  <div
                    className="item col-6 border border-primary mt-5 p-3"
                    key={one.id}
                  >
                    <div className="d-flex flex-row p-3 justify-content-around  align-items-center">
                    <div>
                       <img
                      src={one?.photo}
                      style={{ width: 100 + "px", height: 100 + "%" }}
                      alt=""
                    />
                    </div>
                    <div>
                    <h1>
                      {" "}
                      {one.name}{" "}
                    </h1>
                    <p className="mt-3 ap p-3"> {one.detail}  is Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Rem, eaque? Iusto id magnam, sint
                      accusantium numquam totam nulla, necessitatibus nam amet
                      exercitationem ipsam molestias distinctio, quod iste
                      quisquam vero earum. </p>
                    </div>
                    </div>
                    <button className="btn btn-primary  my-3 mx-5">
                      $400
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skin;
