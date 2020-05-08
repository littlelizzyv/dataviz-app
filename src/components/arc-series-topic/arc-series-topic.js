import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {XYPlot, ArcSeries, XAxis, YAxis} from 'react-vis/dist/index';

import {EXTENDED_DISCRETE_COLOR_RANGE as COLORS} from 'react-vis/dist/theme';

const PI = Math.PI;

function updateData() {
  const divider = Math.floor(Math.random() * 8 + 3);
  const newData = [...new Array(5)].map((row, index) => {
    return {
      color: index,
      radius0: Math.random() > 0.8 ? Math.random() + 1 : 0,
      radius: Math.random() * 3 + 1,
      angle: ((index + 1) * PI) / divider,
      angle0: (index * PI) / divider
    };
  });
  return newData.concat([
    {angle0: 0, angle: PI * 2 * Math.random(), radius: 1.1, radius0: 0.8}
  ]);
}


export default class Example extends React.Component {
  state = {
    data: updateData(),
    value: false
  };
  render() {
    return (
      <div>
        <XYPlot xDomain={[-1, 1]} yDomain={[-1, 1]} width={300} height={300}>
          <XAxis />
          <YAxis />
          <ArcSeries
            animation
            radiusDomain={[0, 0.9]}
            data={this.state.data.map(row => {
              if (this.state.value && this.state.value.color === row.color) {
                return {...row, style: {stroke: 'black', strokeWidth: '5px'}};
              }
              return row;
            })}
            colorRange={COLORS}
            onValueMouseOver={row => this.setState({value: row})}
            onSeriesMouseOut={() => this.setState({value: false})}
            colorType={'category'}
          />
        </XYPlot>
      </div>
    );
  }
}