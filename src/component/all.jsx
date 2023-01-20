import React from "react";
import items from "../list";


function All_list(){
    return(
        <React.Fragment>
           
            <div className=" right border border-primary p-5">
            
          <div className="row d-flex flex-column flex-lg-row flex-md-column text-center align-items-center">
              
              {items.map((one)=>{
                return(
                    <div className=" col-12 col-lg-3 col-md-6 col-sm-12 border border-primary mt-5 p-2" key={one.id}>
                    <img
                      src={one?.photo}
                      style={{ width: 150 + "px", height: 100 + "%" }}
                      className='border border-primary'
                      alt=""
                    />
                    <p className="mt-3"> {one.name}  </p>
                    <button className="btn btn-primary text-center my-3">Detail</button>
                  </div>
      
                )
              })}

       
            
          </div>
        
            </div>
        </React.Fragment>
    )
}


export default All_list;