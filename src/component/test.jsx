import React from "react";
import items from "../list";

function Test() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row  d-flex flex-column flex-lg-row flex-sm-column  align-items-center justify-content-around text-center">
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
                    <div className="d-flex flex-row p-3 justify-content-around  align-items-center">
                      <div>
                        <img
                          src={one?.photo}
                          style={{ width: 100 + "px", height: 100 + "%" }}
                          alt=""
                        />
                      </div>
                      <div>
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
      </div>
    </React.Fragment>
  );
}

{
  /* <div class="card" style="width: 18rem;">
  <img src={one?.photo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{one.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary text-center my-3">Detail</button>
  </div>
</div> */
}

export default Test;

{
  /* <img
                      src={one?.photo}
                    //   style={{ width: 150 + "px", height: 100 + "%" }}
                      className='img img-fluid'
                      alt=""
                    />
                    <p className="mt-3"> {one.name}  </p>
                    <button className="btn btn-primary text-center my-3">Detail</button> */
}
