import React from "react";

import { Link } from "react-router-dom";
import "../style/model.css";
import ReactDOM from "react-dom";
import Modal from "react-modal";


function Model() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      height: 'auto',
      
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById("root"));

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <div className="container pop mt-0 mb-4 ">
        <button
          type="button"
          onClick={openModal}
          class=" p-3 cat"
          style={{ backgroundColor: "#e6e7e8" }}
        >
          Category All <i class="fa-solid fa-angle-down mx-5"></i>
        </button>

        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
           

           <div className="d-flex flex-row justify-content-around align-items-center p-5">
           <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Categories   </h2>

<i onClick={closeModal} class="fa-solid fa-xmark fa-2xl text-end"></i> 


           </div>
 

            
           
        
             <div className="item d-flex flex-column flex-lg-row flex-md-column justify-content-evenly align-items-center mb-5">
             <Link
              className=" btn btn-primary text-white  nav-item active mt-2"
              to="/product"
            >
              All Products
            </Link>
            <Link
              className=" btn btn-primary text-white nav-item active mt-2"
              to="/hair"
            >
              Hair Care
            </Link>
            <Link
              className=" btn btn-primary text-white   nav-item active mt-2"
              to="/skin"
            >
              Skin Care
            </Link>
            <Link
              className="btn btn-primary text-white nav-item active mt-2"
              to="/body"
            >
              Body Care
            </Link>

            <Link
              className=" btn btn-primary text-white nav-item active mt-2"
              to="/collagen"
            >
              Collagen
            </Link> 

            <Link
              className=" btn btn-primary text-white  nav-item active mt-2"
              to="/daily"
            >
              Daily Wash
            </Link>
             </div>
         
           
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Model;
