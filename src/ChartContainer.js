import React from 'react'
import {Chart} from 'react-google-charts'


/**
 * Container (logic) for bar chart.
 */
export default class ChartContainer extends React.Component {
  constructor(props){
    super(props)
    this.getData = this.getData.bind(this)
    this.findMaxValue = this.findMaxValue.bind(this)
  }

  /**
   * Filter data from the this.props.data object for the chosen chart.
   */
  getData() {
    let filterData
    if (this.props.name === 'filter') {
      filterData = Array.from(new Map([...new Set(this.props.data)].map(
        x => [x.filter, this.props.data.filter(y => y.filter === x.filter).length])))
      filterData.unshift(["filter name", "occurances"])
    }
    else if (this.props.name === 'likes') {
      filterData = Array.from(new Map([...new Set(this.props.data)].map(
        x => [x.caption.text.substring(0,10) + "...", x.likes.count])))
      filterData.unshift(["picture description", "count"])
    }
    else if (this.props.name === 'comments') {
      filterData = Array.from(new Map([...new Set(this.props.data)].map(
        x => [x.caption.text.substring(0,10) + "...", x.comments.count])))
      filterData.unshift(["picture description", "count"])
    }
    
    return filterData
  }

  /**
   * Find maximal value in the filtered data to set max value for the x-axis of the chart.
   */
  findMaxValue(filterData) {
    let maxValue = filterData.reduce((max, curr) => {
      return curr[1] > max ? max = curr[1] : null
    }, 0)
    // for values <= 5, the chart draws 0.5 steps on the x-axis
    return maxValue <= 5 ? maxValue = 6 : maxValue
  }

  render() {
    let filterData = this.getData()
    let maxValue = this.findMaxValue(filterData)
    let options = {
      title: this.props.name,
      hAxis: {title: 'count', minValue: 0, maxValue: maxValue},
      vAxis: {title: this.props.name, minValue: 0, maxValue: 0},
      legend: 'none'
    }
    return (
      <div className="chart-wrapper">
        <Chart
          chartType="BarChart"
          data={filterData}
          options={options}
          graph_id="BarChart"
          width="100%"
          height="400px"
          legend_toggle
         />
       </div>
    )
  }
}