import React from "react";
import "../style/client.css";
import client from "../photo/client.png";

function Client() {
  return (
    <React.Fragment>
      <div className="container mt-5 bg-primary p-5">
        <h1 className="text-center">What My Clients Says</h1>
      
        <hr className="mt-5" />

        <div className="row d-flex flex-column flex-lg-row flex-md-column justify-content-evenly align-items-center">
          {/* <div class="card" style="width: 18rem;">
  <img src={client} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              tempore, sit id, et, tenetur ex maxime laudantium illum tempora
              ipsum ipsam at mollitia officiis ratione! Labore explicabo maxime
              repellendus asperiores?</p>
              <hr />
            <p className="text-center fw-bold">Moe Moe</p>
  </div>
</div> */}

          <div className="col-12  mt-4 col-lg-3 col-md-6 col-sm-12  p-3">
            <div class="card p-2" >
              <img src={client} class="card-img-top" alt="..." />
              <div class="card-body">
               
                <p class="card-text mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  tempore, sit id, et, tenetur ex maxime laudantium illum
                  tempora ipsum ipsam at mollitia officiis ratione! Labore
                  explicabo maxime repellendus asperiores?
                </p>
                <hr />
                <p className="text-center fw-bold">Moe Moe</p>
              </div>
            </div>
          </div>

          <div className="col-12  mt-4 col-lg-3 col-md-6 col-sm-12  p-3">
            <div class="card  p-2" >
              <img src={client} class="card-img-top" alt="..." />
              <div class="card-body">
               
                <p class="card-text mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  tempore, sit id, et, tenetur ex maxime laudantium illum
                  tempora ipsum ipsam at mollitia officiis ratione! Labore
                  explicabo maxime repellendus asperiores?
                </p>
                <hr />
                <p className="text-center fw-bold">Moe Moe</p>
              </div>
            </div>
          </div>

          <div className="col-12  mt-4 col-lg-3 col-md-6 col-sm-12  p-3">
            <div class="card  p-2" >
              <img src={client} class="card-img-top" alt="..." />
              <div class="card-body">
               
                <p class="card-text mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  tempore, sit id, et, tenetur ex maxime laudantium illum
                  tempora ipsum ipsam at mollitia officiis ratione! Labore
                  explicabo maxime repellendus asperiores?
                </p>
                <hr />
                <p className="text-center fw-bold">Moe Moe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Client;
