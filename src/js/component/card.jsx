import React from "react";

const CardComponent = () => {
  return (
    <div className="col-lg-3 d-flex mb-4 justify-content-center align-items-center pb-3 z-n1">
      <div className="card" style={{ width: '500px', height: 'auto', padding: "5px" }}>
        <img src="https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=1920x1080" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse veritatis nesciunt voluptatem blanditiis laudantium! 
          Recusandae molestias cupiditate vitae, consectetur sed aliquam tempore tenetur repudiandae esse ex labore nostrum 
          corporis eius ab reprehenderit est voluptas unde libero deleniti architecto quam? Explicabo, eum velit. 
          Quam est earum tempora aperiam, cumque nesciunt, odio fugiat architecto provident assumenda mollitia sit numquam alias, eius inventore.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;