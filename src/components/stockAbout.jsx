import React from "react";
import imgAbout from "./images/about.png";

function StockAbout() {
  return (
    <React.Fragment>
      <div id="about">
        <h3>ABOUT</h3>
        <hr />
        <div className="container">
          <div className="div50">
            <img src={imgAbout} alt="" />
          </div>
          <div className="div50">
            <div className="textbox">
              <h1>Trading is Changing, Be the First</h1>
              <p>
                At Firstock, we believe the financial system should be built
                with easy to understand for everyone. That’s why we create
                products that let you start investing at your own, on your own
                terms.
              </p>
              <ul>
                <li>No account minimums or commissions</li>
                <li>Maintaining the highest security standards </li>
                <li>Best in class customer support</li>
                <li>A transparent business</li>
              </ul>
              <button>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StockAbout;
