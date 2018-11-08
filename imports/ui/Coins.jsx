import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import CoinData from '../api/coins';
import { format } from '../utils/utils';

class Coins extends Component {
  render() {
    const coins = this.props.coins.map(
      coin => this.makeCoin(coin)
    );

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Volume (24h)</th>
              <th>Circulating Supply</th>
              <th>Change (24h)</th>
            </tr>
          </thead>
          <tbody>
            { coins }
          </tbody>
        </table>
        {(coins.length === 0) ? <img src='/images/loader.gif' alt="Loading" className="loader" /> : ''}
      </div>
    );
  }

  makeCoin(coin) {
    return (
      <tr key={coin.id}>
        <td>{coin.cmc_rank}</td>
        <td className="td-name"><img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt="{coin.name}" />{coin.name}</td>
        <td>€{format(coin.quote.EUR.market_cap, true)}</td>
        <td>€{format(coin.quote.EUR.price)}</td>
        <td>€{format(coin.quote.EUR.volume_24h, true)}</td>
        <td>{format(coin.circulating_supply, true)} {coin.symbol}</td>
        <td className={(coin.quote.EUR.percent_change_24h.toString().includes('-')) ? 'red' : 'green'}>{format(coin.quote.EUR.percent_change_24h)}%</td>
      </tr>
    );
  }
}

export default withTracker(() => {
  return {
    coins: CoinData.find().fetch(),
  };
})(Coins);