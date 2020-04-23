import axios from 'axios';
import moment from 'moment';

async function getRate(coins) {
    const res = await axios(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
    return res.data;
}

async function getStatistics(type) {
    const res = await axios(`https://api.blockchain.info/charts/${type}?timespan=5months&format=json&cors=true`);
    const statistic = {
        title: res.data.name || '',
        description: res.data.description || '',
        data: res.data.values.map(value => [moment(value.x * 1000).format('MMM Do YYYY'), value.y]) || []
    };
    statistic.data.unshift(['Date', res.data.unit]);
    return statistic;
}

export default {
    getRate,
    getStatistics
}