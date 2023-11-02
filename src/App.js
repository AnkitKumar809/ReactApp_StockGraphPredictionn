import React, { useState } from 'react';
import Stock from './Stocks';
import './App.css';

function App() {
  const [selectedCompany, setSelectedCompany] = useState('AAPL');

  const handleCompanyChange = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="App">
      <div className="tag">
         <h1>Company Stock Data</h1>
      </div>
      <div className="comName">
        <button className="btn" onClick={() => handleCompanyChange('AAPL')}>AAPL</button>
        <button className="btn" onClick={() => handleCompanyChange('MSFT')}>MSFT</button>
        <button className="btn" onClick={() => handleCompanyChange('TSLA')}>TSLA</button>
        <button className="btn" onClick={() => handleCompanyChange('AMZN')}>AMZN</button>
        <button className="btn" onClick={() => handleCompanyChange('META')}>META</button>
      </div>
      
      <div className="Sdata">
        <Stock selectedCompany={selectedCompany} />
      </div>
    </div>
  );
}

export default App;