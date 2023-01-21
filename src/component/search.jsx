import React from "react";



function Search(){
    return(
        <React.Fragment>
             <div className="container-fluid p-5 mt-3">
          <div className="row border border-primary d-flex flex-column flex-lg-row flex-md-column justify-content-evenly align-items-center p-5">
            <div className="col">
              <h1>LOGO</h1>
            </div>

            <div className="col search ">
            <input type="text" placeholder="🔍 Search Here..  " />
            </div>
          </div>
        </div>
        </React.Fragment>
    )
}


export default Search;