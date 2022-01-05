import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import moment from "moment";

import { connect } from 'react-redux';

const Chart = require("react-chartjs-2").Chart;

const chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(200, 150, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)"
};

const color = Chart.helpers.color;
const data = {
    datasets: [
        {
            label: "FIRE-AVAX",
            backgroundColor: color(chartColors.yellow)
                .alpha(0.5)
                .rgbString(),
            borderColor: chartColors.yellow,
            fill: false,
            lineTension: 0,
            //   borderDash: [8, 4],
            data: []
        }
    ]
};

const options = {
    elements: {
        line: {
            tension: 0.5
        }
    },
    scales: {
        xAxes: [
            {
                type: "realtime",
                distribution: "linear",
                realtime: {
                    // onRefresh: function (chart) {
                    //     chart.data.datasets[0].data.push({
                    //         x: moment(),
                    //         y: Math.random()
                    //     });
                    // },
                    delay: 1000,
                    time: {
                        displayFormat: ""
                    }
                },
                ticks: {
                    displayFormats: 1,
                    maxRotation: 0,
                    minRotation: 0,
                    stepSize: 10,
                    maxTicksLimit: 10,
                    minUnit: "second",
                    source: "auto",
                    autoSkip: true,
                    callback: function (value) {
                        return moment(value, "HH:mm:ss").format("mm:ss");
                        return "";
                    }
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    max: 3,
                    min: 0
                }
            }
        ]
    }
};

class MyChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                datasets: [
                    {
                        label: "FIRE-AVAX",
                        backgroundColor: color(chartColors.yellow)
                            .alpha(0.5)
                            .rgbString(),
                        borderColor: chartColors.yellow,
                        fill: false,
                        lineTension: 0,
                        //   borderDash: [8, 4],
                        data: []
                    }
                ]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.5
                    }
                },
                scales: {
                    xAxes: [
                        {
                            type: "realtime",
                            distribution: "linear",
                            realtime: {
                                // onRefresh: function (chart) {
                                //     chart.data.datasets[0].data.push({
                                //         x: moment(),
                                //         y: state.temp
                                //     });
                                // },
                                delay: 1000,
                                time: {
                                    displayFormat: ""
                                }
                            },
                            ticks: {
                                displayFormats: 1,
                                maxRotation: 0,
                                minRotation: 0,
                                stepSize: 10,
                                maxTicksLimit: 10,
                                minUnit: "second",
                                source: "auto",
                                autoSkip: true,
                                callback: function (value) {
                                    return moment(value, "HH:mm:ss").format("mm:ss");
                                }
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                max: 3,
                                min: 0
                            }
                        }
                    ]
                }
            }
        };
    }

    componentDidMount() {

        setInterval(() => {
            this.props.disptch({ type: "GET_FIRE_VALUE" });
            this.state.data.datasets[0].data.push({
                x: moment(),
                y: this.props.fire_value
            })
        }, 2000);
    }

    render() {

        return (
            <Line data={this.state.data}
                options={this.state.options}
                height={200}
            // width={200}
            />
        );
    }
}

const mapStateToProps = state => {
    return { fire_value: state.fire_value }
}

const mapDispatchToProps = disptch => {
    return { disptch };
}



export default connect(mapStateToProps, mapDispatchToProps)(MyChart);
