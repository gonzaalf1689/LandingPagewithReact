import React from "react";

// a function component 
const Jumbotron = () =>{
    return (<div className="p-5 ms-5 me-5 mb-5 rounded-3" style={{ backgroundColor: 'lightgrey' }}>
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="fs-3 mt-2">"Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking."</p>
        <button className="btn btn-primary btn-lg mt-2" type="button">Call to action!</button>
      </div>
    </div>
    );
}
export default Jumbotron;