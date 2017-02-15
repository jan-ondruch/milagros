import React from 'react'
import {Chart} from 'react-google-charts'
 
export default class ChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.addData = this.addData.bind(this);
    this.findMaxValue = this.findMaxValue.bind(this);
  }

  addData() {
    let filterData;
    if (this.props.name === 'filter') {
      filterData = Array.from(new Map([...new Set(this.props.data)].map(
        x => [x.filter, this.props.data.filter(y => y.filter === x.filter).length])))
      filterData.unshift(["filter name", "occurances"]);
    }
    else if (this.props.name === 'likes') {
      filterData = Array.from(new Map([...new Set(this.props.data)].map(
        x => [x.caption.text.substring(0,10) + "...", x.likes.count])))
      filterData.unshift(["picture description", "count"]);
    }
    else if (this.props.name === 'comments') {
      filterData = Array.from(new Map([...new Set(this.props.data)].map(
        x => [x.caption.text.substring(0,10) + "...", x.comments.count])))
      filterData.unshift(["picture description", "count"]);
    }
    
    return filterData
  }

  findMaxValue(filterData) {
    let maxValue = filterData.reduce((max, curr) => {
      curr[1] > max ? max = curr[1] : max = max;
      return max;
    }, 0);
    if (maxValue <= 5) maxValue++;
    return maxValue;
  }

  render() {
    let filterData = this.addData();
    let maxValue = this.findMaxValue(filterData);
    let options = {
      title: this.props.name,
      hAxis: {title: 'count', minValue: 0, maxValue: maxValue},
      vAxis: {title: this.props.name, minValue: 0, maxValue: 0},
      legend: 'none'
    };
    return (
      <Chart
        chartType="BarChart"
        data={filterData}
        options={options}
        graph_id="BarChart"
        width="100%"
        height="400px"
        legend_toggle
       />
    );
  }
};