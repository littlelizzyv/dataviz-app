import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis/dist/index';

export default function Example(props) {
  return (
    <Grid container spacing={3}>
        <Grid item xs={10} md={8} lg={4}>
            <Paper>
              <XYPlot xType="ordinal" width={400} height={300} xDistance={200}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineMarkSeries
                    className="linemark-series-example"
                    style={{
                    strokeWidth: '3px'
                    }}
                    lineStyle={{stroke: 'red'}}
                    markStyle={{stroke: 'blue'}}
                    data={[{x: "Sadness", y: 0.36126038}, 
                        {x: "Joy", y: 0.11918178}, 
                        {x: "Fear", y: 0.11505088}, 
                        {x: "Disgust", y: 0.1589375},
                        {x: "Anger", y: 0.22218071}]}
                />
                </XYPlot>
            </Paper>
        </Grid>
        <Grid item xs={10} md={8} lg={4}>
            <Paper>
            <XYPlot xType="ordinal" width={400} height={300} xDistance={200}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineMarkSeries
                    className="linemark-series-example"
                    style={{
                    strokeWidth: '3px'
                    }}
                    lineStyle={{stroke: 'red'}}
                    markStyle={{stroke: 'blue'}}
                    data={[{x: "Sadness", y: 0.13161193}, 
                        {x: "Joy", y: 0.61615743}, 
                        {x: "Fear", y: 0.05973665}, 
                        {x: "Disgust", y: 0.05659465},
                        {x: "Anger", y: 0.06450791}]}
                />
                </XYPlot>
            </Paper>
        </Grid>
    </Grid>
  );
}