import React from "react";
import img1 from "./images/hero1.svg";
import img2 from "./images/herocard1.svg";
import img3 from "./images/herocard2.svg";

function StockHome() {
  return (
    <React.Fragment>
      <div id="home">
        <div className="hero-sec">
          <div className="div50">
            <img src={img1} alt="" />
          </div>
          <div className="div50">
            <div className="textbox">
              <h1>Investing Simplified</h1>
              <p>
                Invest in Stocks, Futures, Options, Mutual Funds, IPOs, Bonds,
                ETFs.
              </p>
              <p>
                A success formula for right investing may not exist. But a
                simple formula sure does. Embark on your journey of simplified
                investing.
              </p>
              <button>Sign Up</button>
              <button>Log In</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card hover">
            <img src={img2} alt="" />
            <h2> Single Interface Technology</h2>
          </div>
          <div className="card hover">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
              <g data-name="Box Checklist">
                <path
                  d="M33 57H4V19h20v8a1 1 0 0 0 1.496.868L32 24.151l6.504 3.717A1 1 0 0 0 40 27v-8h20v11a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v50a1 1 0 0 0 1 1h30a1 1 0 0 0 0-2zm27-40H40V9h20zm-22 8.276-5.504-3.144a1 1 0 0 0-.992 0L26 25.276V9h12zM4 9h20v8H4z"
                  style={{ fill: "#1d1b1e" }}
                />
                <path
                  d="M28 50a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2h20a1 1 0 0 0 1-1zM7 53a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2zM61 33a25 25 0 1 0 25 25 25.028 25.028 0 0 0-25-25zm0 48a23 23 0 1 1 23-23 23.026 23.026 0 0 1-23 23z"
                  style={{ fill: "#1d1b1e" }}
                />
                <path
                  d="M61 37a21 21 0 1 0 21 21 21.024 21.024 0 0 0-21-21zm0 40a19 19 0 1 1 19-19 19.022 19.022 0 0 1-19 19z"
                  style={{ fill: "#1d1b1e" }}
                />
                <path
                  d="M69.707 48.293a1 1 0 0 0-1.414 0L57 59.586l-3.293-3.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l15-15a1 1 0 0 0 0-1.414zM57 65.586 51.414 60 53 58.414l3.293 3.293a1 1 0 0 0 1.414 0L69 50.414 70.586 52z"
                  style={{ fill: "#1d1b1e" }}
                />
              </g>
            </svg>
            <h2> Zero Commission Investing</h2>
          </div>
          <div className="card hover">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <g data-name="29-accounting">
                <path d="M18 36H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h36a3 3 0 0 1 3 3v17h-2V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h15z" />
                <path d="M1 8h37v2H1zM4 4h2v2H4zM8 4h2v2H8zM12 4h2v2h-2zM36 4h2v2h-2z" />
                <path d="M8 4h2v2H8z" />
                <path d="M8 4h2v2H8z" />
                <path d="M8 4h2v2H8zM35 36a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" />
                <path d="M40 44H30a1 1 0 0 1-1-1v-3a6 6 0 0 1 12 0v3a1 1 0 0 1-1 1zm-9-2h8v-2a4 4 0 0 0-8 0z" />
                <path d="M45 48H25a3 3 0 0 1-3-3v-9.586l-6.707-6.707A1 1 0 0 1 16 27h6v-2a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3zM18.414 29l5.293 5.293A1 1 0 0 1 24 35v10a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1H25a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1zM14 22h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2z" />
                <path d="M14 26h-2a3 3 0 0 1-3-3h2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-2v-2h2a3 3 0 0 1 0 6zM12 15h2v2h-2z" />
                <path d="M12 25h2v2h-2z" />
                <path d="M13 30a9 9 0 1 1 9-9h-2a7 7 0 1 0-7 7zM31 13h7v2h-7zM25 17h13v2H25zM27 13h2v2h-2z" />
              </g>
            </svg>
            <h2> Free Trading And Demat Account</h2>
          </div>
          <div className="card hover">
            <img src={img3} alt="" />
            <h2> Multiple Investment Choices</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StockHome;
