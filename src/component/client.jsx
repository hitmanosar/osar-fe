import React from "react";
import "../style/client.css";
import client from "../photo/client.png";

function Client() {
  return (
    <React.Fragment>
      <div className="container mt-5 border border-primary p-5">
        <h1 className="text-center">What My Clients Says</h1>
        <hr className="mt-5" />

        <div className="row d-flex flex-column flex-lg-row flex-md-column justify-content-evenly align-items-center">
          <div className="col-12  mt-5 col-lg-3 col-md-6 col-sm-12 border border-primary p-3">
            <img src={client} width={300+'px'} className='text-center ss mx-auto' alt="" />
            <p className="mt3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              tempore, sit id, et, tenetur ex maxime laudantium illum tempora
              ipsum ipsam at mollitia officiis ratione! Labore explicabo maxime
              repellendus asperiores?
            </p>
            <hr />
            <p className="text-center fw-bold">Moe Moe</p>
          </div>

          <div className="col-12 col-lg-3 col-md-6 col-sm-12 border  mt-5 border-primary  p-3">
            <img src={client} width={300+'px'} className='text-md-center ss mx-auto' alt="" />
            <p className="mt3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              tempore, sit id, et, tenetur ex maxime laudantium illum tempora
              ipsum ipsam at mollitia officiis ratione! Labore explicabo maxime
              repellendus asperiores?
            </p>
            <hr />
            <p className="text-center fw-bold">Moe Moe</p>
          </div>

          <div className="col-12 col-lg-3 col-md-6 col-sm-12 border  mt-5 border-primary  p-3">
            <img src={client} width={300+'px'} className='text-center ss mx-auto' alt="" />
            <p className="mt3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              tempore, sit id, et, tenetur ex maxime laudantium illum tempora
              ipsum ipsam at mollitia officiis ratione! Labore explicabo maxime
              repellendus asperiores?
            </p>
            <hr />
            <p className="text-center fw-bold">Moe Moe</p>
          </div>


        </div>
      </div>
    </React.Fragment>
  );
}

export default Client;