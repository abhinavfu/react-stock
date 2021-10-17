import React from "react";
import imgdemat from "./images/demat.png";
import imgmultiple from "./images/multiple.png";
import imginterface from "./images/interface.png";
import imgzero from "./images/zero.png";

function StockOffer() {
  return (
    <React.Fragment>
      <div id="offer">
        <h3>WHAT WE OFFER</h3>
        <hr />
        <div className="container">
          <div className="div50">
            <img src={imgdemat} alt="" />
          </div>
          <div className="div50">
            <div className="textbox">
              <h1>
                Free Trading & Demat Account To Flag Off Your Firstock Journey
                In A Day
              </h1>
              <p>
                Your first step towards achieving your financial well-being is
                on us.
              </p>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="div50">
            <div className="textbox">
              <h1>Multiple Investment Choices For All Your Financial Goals</h1>
              <p>
                Invest in Stocks, Futures, Options, Mutual Funds, IPOs, Bonds,
                ETFs
              </p>
              <button>Know More</button>
            </div>
          </div>
          <div className="div50">
            <img src={imgmultiple} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="div50">
            <img src={imginterface} alt="" />
          </div>
          <div className="div50">
            <div className="textbox">
              <h1>Single-Interface Technology For Fast Trading & Investing</h1>
              <p>
                Manage your assets in a single app. Give your trading an edge
                using our advanced technology.
              </p>
              <button>Download Apps</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="div50">
            <div className="textbox">
              <h1>Zero Brokerage For Investments</h1>
              <p>
                Absolutely Zero Brokerage for Investments and Flat ₹20 for
                Intraday and F&O Trades
              </p>
              <button>Know More</button>
            </div>
          </div>
          <div className="div50">
            <img src={imgzero} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StockOffer;
