import React from 'react';
import { Chart as GoogleChart } from 'react-google-charts';

export function Chart(props) {
    const { chart } = props;
    return (
        <article className="Chart">
            <h3>{chart.title}</h3>
            <div className="GoogleChart">
                <GoogleChart
                    chartType={chart.type}
                    data={chart.data}
                    options={chart.options}
                />
            </div>
            <p>{chart.description}</p>
        </article>
    )
}

export default Chart;
