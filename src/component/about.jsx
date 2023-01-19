import React from "react";
import Nav from "./nav";
import "../style/ab.css";
import h3 from "../photo/h3.jpg";
import Footer from "./footer";

function About() {
  return (
    <React.Fragment>
      <div>
        <Nav />
        <div className="container ab">
          <h1 className="text-center "> We Care Your Beauty, Feme!!!</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ea
            quam assumenda unde quia? Maxime et molestiae rem amet fugiat quas
            assumenda nemo fuga praesentium iste, illo sit tempore quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero natus
            amet dolores iusto doloremque eos. Corrupti eius eveniet iure
            repellendus, sunt quasi necessitatibus a rerum, eaque cumque placeat
            maiores ullam!
          </p>
          <br />
          <img
            src={h3}
            className="img img-fluid border border-danger"
            width={100 + "%"}
            alt=""
          />
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default About;
