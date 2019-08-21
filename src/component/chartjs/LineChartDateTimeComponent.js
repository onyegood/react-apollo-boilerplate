import React, {Component} from "react";
import { Line } from "react-chartjs-2";


class LineChartDateTimeComponent extends Component {

    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        legendPosition: 'right',
        titleText: '',
        titleFontSize: 25,
        height: 120,
        bg: []
    }


    
    render(){
       

     const {labels, values1} = this.props;

     console.log('labels', labels);
     console.log('values1', values1);

      const propsData = {
          
        labels: labels,
        datasets: [{
            label: "Total: ",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "transparent",
            borderColor: "#18af5c", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "#18af5c",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "white",
            pointHoverBorderColor: "#18af5c",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: values1,
            spanGaps: true,
          }, {
            label: "Total: ",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "transparent",
            borderColor: "#2195f3",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "white",
            pointBackgroundColor: "#2195f3",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "white",
            pointHoverBorderColor: "#2195f3",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: this.props.values2,
            spanGaps: false,
          }]
        }
        return <Line
             data={propsData}
             options={{ 
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'month'
                        },
                        ticks: {
                            autoSkip: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            autoSkip: false
                        }
                    }],
                },
                 title:{
                    display: this.props.displayTitle,
                    text: this.props.titleText,
                    fontSize: this.props.titleFontSize
            },
        
            legend:{
                display: this.props.displayLegend,
                position: this.props.legendPosition,
                    labels: {
                        fontColor: '#000'
                    }
                },
            showLine: false,

            }} 
            height={this.props.height}/>
    }
}

export default LineChartDateTimeComponent;