import React from "react";



function Footer(){
    return(
        <React.Fragment>
            <div className="container-fluid mt-5 bg-primary p-5">
                 
                 <div className="row d-flex flex-column flex-lg-row text-center  justify-content-around align-items-center ">
                    <div className="col-12 col-lg-4 col-md-12 col-sm-12 mt-5">
                        <p className="text-uppercase text-white">cetephillie myanamar</p>

                      <div className="mt-5">
                      <p>About Us</p>
                        <p>Contents</p>
                         <p>Terms & Condition</p>
                      </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-12 col-sm-12 mt-5">
                        <p className="text-uppercase text-white">Shop</p>

                       <div className="mt-5">
                       <p>Cleansier</p>
                        <p>Moisturizer</p>
                         <p>Sun Protection</p>
                         <p>Cethephill Baby</p>
                       </div>
                    </div>

                    <div className="col-12 col-lg-4 col-md-12 col-sm-12 mt-5">
                        <p className="text-uppercase text-white">Social</p>

                       <span><i class="fa-brands fa-facebook-f fa-2xl mt-5"></i></span>
                    </div>

                 </div>


            </div>
        </React.Fragment>
    )
}


export default Footer;