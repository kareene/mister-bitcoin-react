import React, { Component } from 'react';

import BitcoinService from '../services/BitcoinService';
import Chart from '../components/Chart';

export class StatisticPage extends Component {

    state = {
        charts: []
    }

    componentDidMount() {
        [
            { type: 'market-price' },
            { type: 'trade-volume', color: 'green' },
            { type: 'avg-block-size', color: 'red' },
            { type: 'n-transactions', color: 'purple' }
        ].forEach(chartRequst => {
            this._createChart(chartRequst.type, chartRequst.color);
        });
    }

    async _createChart(statisticType, color = 'blue') {
        let chart = {
            // width, height are set in css
            id: statisticType,
            title: '',
            description: '',
            type: 'AreaChart',
            data: [],
            options: {
                colors: [color],
                chartArea: { left: 0, top: 20, width: '100%', height: '200' },
                legend: { position: 'none' },
                hAxis: {
                    textPosition: 'none',
                    gridlines: { count: 0, color: 'transparent' }
                },
                vAxis: {
                    textPosition: 'none'
                }
            }
        };

        try {
            const statistic = await BitcoinService.getStatistics(statisticType);
            chart.title = statistic.title;
            chart.description = statistic.description;
            chart.data = statistic.data;
            if (chart.data.length) {
                this.setState({ charts: [...this.state.charts, chart] });
            }
        } catch (err) {
            console.log(`Error: Could not get statistics for ${statisticType}\n`, err)
        };
    }

    render() {
        return (
            <ul className="StatisticPage">
                {this.state.charts.map(chart => (
                    <li key={chart.id}>
                        <Chart chart={chart} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default StatisticPage;
