import React from 'react'

import ChartistGraph from "react-chartist";
import { lineAnimation, lineOption,responsiveOptions } from './chartStyle'
export interface ChartProps {
  data: {
    labels: string[],
    series: number[][]
  },
  type?: "Line"|"Bar"|"Area"|"Point";

}
const Chart: React.SFC<ChartProps> = ({ data, type = 'Line' }) => {

  return <ChartistGraph
    className="ct-chart"
    data={data}
    type={type}
    options={lineOption({ low: 0, high: 2000 ,type})}
    responsiveOptions={responsiveOptions(type)}
    listener={lineAnimation({})}
  />
}


export default Chart
