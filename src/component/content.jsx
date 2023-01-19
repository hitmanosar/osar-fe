import React from "react";



function Content(){
    return(
        <React.Fragment>
            <div className="container text-center mt-5">
              <h1 className="text-uppercase">content us</h1>
              <p>Address &nbsp;: No (84), Yadanar Street, Kamayut Township, Yangon</p>
            <p>Phone  &nbsp;&nbsp;&nbsp;<span className="ms-1"></span>:<span style={{color: '#1a6c7a'}} className='p'> +959 777 120 131 , +959 777 120 141</span></p>
            <p>Email  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{marginLeft: 5+'px'}}></span>: <span style={{color: '#1a6c7a'}} className='p'>info@passiondesignandmedia.com</span> </p>
            </div>
        </React.Fragment>
    )
}


export default Content;