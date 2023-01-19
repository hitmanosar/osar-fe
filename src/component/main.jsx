import React from "react";
import '../style/main.css';
import h1 from '../photo/h1.jpg';
import h2 from '../photo/h2.jpg';
import h3 from '../photo/h3.jpg';
import h4 from '../photo/h4.jpg';
import h5 from '../photo/h5.jpg';

function Main() {
  return (
    <React.Fragment>
      <div className="container mt-5 p-2">
      <div className="row d-flex flex-column flex-md-column flex-lg-row  align-items-center  justify-content-around">

        <div className="col-12 col-lg-7 col-md-12 text-md-center col-sm-12">
        <h1>We Care Your Beauty,Feme!</h1>
        <p>
          Feme Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
          optio. Tempore consequuntur distinctio voluptate aperiam corporis
          saepe qui quae atque ullam doloremque? Sint ut, reprehenderit vel
          itaque odio consequatur ad.
        </p>
        </div>

        <div className="col-12 col-lg-3 col-md-7  p-3 rounded bg-danger">
          <p>Hair Care</p>
          <img src={h1} width={100+'%'} height={200+'px'} alt="" />
          <button className="btn btn-primary float-end mt-5">See More</button>
        </div>

       

      </div>


      <div className="row  d-flex flex-column flex-lg-row flex-md-column  justify-content-around  align-items-center">

      <div className="col-12 col-lg-3 col-md-7 col-sm-12 p-3 rounded mt-5 bg-danger">
          <p>Hair Care</p>
          <img src={h1} width={100+'%'} height={200+'px'} alt="" />
          <button className="btn btn-primary float-end mt-5">See More</button>
        </div>

        <div className="col-12 col-lg-3 col-md-7 col-sm-12 p-3 mt-5 rounded bg-danger">
          <p>Hair Care</p>
          <img src={h1} width={100+'%'} height={200+'px'} alt="" />
          <button className="btn btn-primary float-end mt-5">See More</button>
        </div>

        <div className="col-12 col-lg-3 col-md-7 col-sm-12 p-3  mt-5 rounded bg-danger">
          <p>Hair Care</p>
          <img src={h1} width={100+'%'} height={200+'px'} alt="" />
          <button className="btn btn-primary float-end mt-5">See More</button>
        </div>

      </div>


    
      </div>
    </React.Fragment>
  );
}

export default Main;
