import React from "react";
import Chart from "./Chart";
import {Route, Link} from "react-router-dom"

const Charts = ({ coinData, darkMode }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <div className="chart__top" >
            <Link to={`/${coin.name}`}>
              <h2 className="coin__title">{coin.name}</h2>
            </Link>
            <h4 className="coin__symbol">({coin.symbol})</h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
          </div>
          <Route exact path={`/${coin.name}`} render={(props)=>
            <Chart props={props} darkMode={darkMode} sparklineData={coin.sparkline_in_7d.price} />}
        />
       </div>
      ))}
    </div>
  );
};
export default Charts;
