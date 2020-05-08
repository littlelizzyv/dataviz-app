import React from 'react';

import clsx from 'clsx';
import useStyles from '../../assets/theme/material-ui-theme';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, MarkSeries, LineSeries} from 'react-vis/dist/index';
import DiscreteColorLegend from 'react-vis/dist/legends/discrete-color-legend';
import BasicRadarChart from '../topic-radar/topic-radar';
import LineChart from '../line-chart/line-chart';
import BarChart from '../persona-bar-chart/persona-bar-chart';
import ArcSeries from '../arc-series-topic/arc-series-topic';

// import topicDataExtended from '../../assets/data/topicDataArrayExtended';
import clusterZeroArray from '../../assets/data/cluster_buckets_2/cluster_0_array';
import clusterOneArray from '../../assets/data/cluster_buckets_2/cluster_1_array';

export default function TopicsPage() {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  
  const listItems0 = clusterZeroArray.map((clusterZeroDataPoint) => {
    const keyword = clusterZeroDataPoint[6];
    return <ListItem>{keyword}</ListItem>
  });

  const listItems1 = clusterOneArray.map((clusterOneDataPoint) => {
    const keyword = clusterOneDataPoint[6];
    return <ListItem>{keyword}</ListItem>
  });

  return (
    <div>
      <BasicRadarChart />
      {/* <LineChart /> */}
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={10} md={8} lg={4}>
        <Paper>
            <div className={classes.demo}>
            <List>
              {listItems0}
            </List>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={10} md={8} lg={4}>
      <Paper>
            <div className={classes.demo}>
            <List>
              {listItems1}
            </List>
          </div>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );
}

