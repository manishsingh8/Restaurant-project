import React from "react";
import './card.css';

const Card = ({ foodApi }) => {
  return (
    <>
     <div className="main-body">
      {foodApi.map((currItem) => {
        return (
          <React.Fragment key={currItem.id}>
            <section className="main-container"  >
              <div className="card" style={{ width: "18rem", height: "auto" }}>
                <div className="images">
                  <img
                    src={currItem.image}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{currItem.name}</h5>
                  <p className="card-text">{currItem.description}</p>
                  <a href="/" className="btn btn-primary">
                    Order Now
                  </a>
                </div>
              </div>
            </section>
          </React.Fragment>
        );
      })}
      </div>
    </>
  );
};

export default Card;
