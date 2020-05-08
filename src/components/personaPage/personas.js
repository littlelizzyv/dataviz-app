import React from 'react';

import clsx from 'clsx';
import useStyles from '../../assets/theme/material-ui-theme';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Data from '../../assets/data';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, MarkSeries, LineSeries} from 'react-vis/dist/index';
import data from '../../assets/data.json';
import BasicRadarChart from '../persona-radar/persona-radar';
import BarChart from '../persona-bar-chart/persona-bar-chart';

export default function PersonaPage() {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  
  function getPersonalityData() {
    const personality_data = data;
    const listItems = personality_data.map((percentile, raw_score) => {
     return {x: percentile, y: raw_score} 
    });
  }
  
  const firstData = getPersonalityData();

  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={10} md={4} lg={4}>
        <Paper>
          <BasicRadarChart />
        </Paper>
      </Grid>
      <Grid item xs={10} md={4} lg={4}>
        <Paper>
          <BarChart />
        </Paper>
      </Grid>
    </Grid>
  );
}

