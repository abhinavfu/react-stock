import React from "react";

function StockPricing() {
  return (
    <React.Fragment>
      <div id="pricing">
        <h3>PRICING</h3>
        <hr />
        <div className="pricing-text">
          <h1>Commission free for investors & flat 20 for traders</h1>
          <p>
            Firstock believes that technology empowers traders and investors to
            be more profitable helping to grow our user’s economic freedom.
            Technology also enables us to provide transparent and
            straightforward prices with 0 commission Investors and no minimum
            deposit.
          </p>
        </div>
        <div className="container">
          <div className="card hover">
            <h2>Pricing & Charges</h2>
            <button>Know More</button>
          </div>
          <div className="card hover">
            <h2>Brokerage Calculator</h2>
            <button>Know More</button>
          </div>
          <div className="card hover">
            <h2>Margin Calculator</h2>
            <button>Know More</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StockPricing;
