import React from "react";

function StockContact() {
  return (
    <React.Fragment>
      <div id="contact">
        <h3>Contact Us</h3>
        <hr />
        <div className="container">
          <div className="card">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="paper-plane"
              className="svg-inline--fa fa-paper-plane fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
              ></path>
            </svg>
            <h3> Account Opening</h3>
            <p>+91 9876543210</p>
            <p>account@stock.com</p>
            <p>10:00 AM - 7:00 PM</p>
          </div>
          <div className="card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-open"
              viewBox="0 0 16 16"
            >
              <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
            </svg>
            <h3> Support:</h3>
            <p>+91 9876543210</p>
            <p>support@stock.com</p>
            <p>8:30 AM - 5:30 PM</p>
          </div>
          <div className="card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z" />
                  <circle cx="9" cy="13" r="1" />
                  <circle cx="15" cy="13" r="1" />
                  <path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z" />
                </g>
              </g>
            </svg>
            <h3> Call & trade:</h3>
            <p>+91 9876543210</p>
            <p>trade@stock.com</p>
            <p>9:00 AM - 5:30 PM </p>
          </div>
        </div>
        <div className="address">
          <div>
            <h3>Registered Office:</h3>
            <p>8/1 Near South End Circle, Saket, Delhi - 110017</p>
          </div>
          <div>
            <h3>Corporate Office:</h3>
            <p>No 350 7th Main Rd 5th Block, Saket, Delhi - 110017, India</p>
          </div>

          <iframe
            src="https://www.google.com/maps/d/embed?mid=1IEVwjHNKZcYI5LKHZfRSFXEKyzg"
            width="80%"
            height="auto"
            title="Delhi address"
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StockContact;
