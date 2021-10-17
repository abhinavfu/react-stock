import React from 'react';
import './App.css';
import StockAbout from './components/stockAbout';
import StockContact from './components/stockContact';
import StockFooter from './components/stockFooter';
import StockHome from './components/stockHome';
import StockNavbar from './components/stockNavbar';
import StockOffer from './components/stockOffer';
import StockPricing from './components/stockPricing';

function App() {
  return (<React.Fragment>
      <StockNavbar/>
      <div className="App">
        <StockHome/>
        <StockAbout />
        <StockOffer/>
        <StockPricing/>
        <StockContact/>
        <StockFooter/>
      </div>
    </React.Fragment>
  );
}

export default App;
