import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const Graphics = ({ data }) => {
  if(data.labels.length === 0) {
    return null
  }

  return (
    <>
    <div className='chart-div'> 
      <Line data={data} />
      <p> Вы получите {data.X} конверсий при CPM {data.eCPM} ₽ </p>
    </div>
  </>
  )
}

export default Graphics

/*
 {
      label: "Конверсии",
      data: [33, 25, 35, 51, 54, 76],
      fill: true,
      borderColor: "#742774"
    }

    
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Конверсии",
      dataset: [0, 10, 25, 31, 44, 55],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
}
*/

