import React, {Component} from "react";
import { Pie } from "react-chartjs-2";


class PieChartComponent extends Component {

    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        legendPosition: 'right',
        titleText: '',
        titleFontSize: 25,
        height: 150,
        labels: [],
        values: [],
        bg: []
    }

    render(){
        return <Pie
            data={{
                    labels: this.props.labels,
                    datasets: [
                    {
                        label: "Total ",
                        data: this.props.values,
                        backgroundColor: this.props.bg,
                        // borderColor: "#2195f3",
                    }]
            }} 
             options={{
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
                }
            }} 
            height={this.props.height}
            
            />
    }
}

export default PieChartComponent;