import { Meteor } from 'meteor/meteor';
import CoinData from '/imports/api/coins';
import { response } from '/imports/api/response';

function insertCoins() {
  CoinData.remove({});
  response.data.map(
    coin => CoinData.insert(coin)
  );
}

Meteor.startup(() => {
    insertCoins();
});
