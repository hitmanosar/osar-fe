import React from "react";
import items from "../list";


function All_list(){
    return(
        <React.Fragment>
           
            <div className="right border border-primary  px-5 py-2">

            {/* className="row d-flex flex-column flex-lg-row flex-md-column text-center justify-content-around align-items-center" */}

            {/* className=" col-12 col-lg-3 col-md-6 col-sm-12 border border-primary mt-5 p-2 mx-auto" */}
            
          <div className="row  d-flex flex-column flex-lg-row flex-md-column align-items-center justify-content-evenly text-center" >
              
          {items.map((one)=>{
                return(
                    <div className=" col-12 col-lg-3 col-md-12 col-sm-12 p-0 mt-5" key={one.id}>
                  <div class="card cc">
  <img src={one?.photo} class="card-img-top text-center" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{one.name}</h5>
   
    <button className="btn btn-primary text-center my-3">Detail</button>
  </div>
</div>

                  </div>
      
                )
              })}
       
            
          </div>
          <br />
            <br />
       
            </div>
         
        </React.Fragment>
    )
}


export default All_list;