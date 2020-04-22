import axios from 'axios';

async function getRate(coins) {
    const res = await axios(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
    return res.data;
}

async function getStatistics(type) {
    const res = await axios(`https://api.blockchain.info/charts/${type}?timespan=5months&format=json&cors=true`);
    return {
        title: res.data.name || '',
        description: res.data.description || '',
        unit: res.data.unit || '',
        data: res.data.values.map(value => [new Date(value.x * 1000), value.y]) || []
    };
}

export default {
    getRate,
    getStatistics
}