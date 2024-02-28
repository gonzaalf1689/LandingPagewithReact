import React from "react";

const CardComponent = () => {
  return (
    <div className="col-lg-3 d-flex justify-content-center align-items-center pb-3">
      <div className="card" style={{ width: '18rem', padding: "5px" }}>
        <img src="https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=1920x1080" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;