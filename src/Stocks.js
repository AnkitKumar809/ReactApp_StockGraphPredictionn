import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function Stock({ selectedCompany }) {
  const [stockChartYvalue, setStockChartYvalue] = useState([]);

  useEffect(() => {
    fetchStock(selectedCompany);
  }, [selectedCompany]);

  const fetchStock = (company) => {
    const API_CALL = `https://api.polygon.io/v2/aggs/ticker/${company}/range/1/day/2022-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=L0G9AGj9fwfpDkx64EJiZ1dZY9p9cBEv`;

    fetch(API_CALL)
      .then((response) => response.json())
      .then((data) => {
        const stockChartYvalueFunction = data.results.map((result) => result.o);
        setStockChartYvalue(stockChartYvalueFunction);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <h1>Graph</h1>
      <Plot
        data={[
          {
            y: stockChartYvalue,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
        ]}
        layout={{ width: 720, height: 440, title: `Stock Chart for ${selectedCompany}` }}
      />
    </div>
  );
}

export default Stock;