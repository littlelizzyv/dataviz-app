// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component} from 'react';
import {format} from 'd3-format';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import RadarChart from 'react-vis/dist/radar-chart';

const RADAR_PROPS = {
  data: [
    { 
        Sadness: 0.36126038, 
        Joy: 0.11918178, 
        Fear: 0.11505088, 
        Disgust: 0.1589375, 
        Anger: 0.22218071
    }
  ],
  domains: [
    {name: 'Sadness', domain: [0, 1]},
    {name: 'Joy', domain: [0, 1]},
    {name: 'Fear', domain: [0, 1]},
    {name: 'Disgust', domain: [0, 1]},
    {name: 'Anger', domain: [0, 1]}
  ],
  height: 300,
  width: 400
};

const RADAR_PROPS1 = {
  data: [
    { 
        Sadness: 0.13161193, 
        Joy: 0.61615743, 
        Fear: 0.05973665, 
        Disgust: 0.05659465, 
        Anger: 0.06450791
    }
  ],
  domains: [
    {name: 'Sadness', domain: [0, 1]},
    {name: 'Joy', domain: [0, 1]},
    {name: 'Fear', domain: [0, 1]},
    {name: 'Disgust', domain: [0, 1]},
    {name: 'Anger', domain: [0, 1]}
  ],
  height: 300,
  width: 400
};

const RADAR_PROPS2 = {
  data: [
    { 
        Openness: 0.91911719, 
        Conscientiousness: 0.56361216, 
        Extraversion: 0.79316634, 
        Agreeableness: 0.18263368, 
        EmotionalRange: 0.27907051
    }
  ],
  domains: [
    {name: 'Openness', domain: [0, 1]},
    {name: 'Conscientiousness', domain: [0, 1]},
    {name: 'Extraversion', domain: [0, 1]},
    {name: 'Agreeableness', domain: [0, 1]},
    {name: 'EmotionalRange', domain: [0, 1]}
  ],
  height: 300,
  width: 400
};

export default function FourQuadrantRadarChart(props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={10} md={8} lg={4}>
          <Paper>
          <RadarChart
              data={RADAR_PROPS.data}
              domains={RADAR_PROPS.domains}
              height={RADAR_PROPS.height}
              width={RADAR_PROPS.width}
              startingAngle={Math.PI / 7}
              className="overflow-okay horizontally-centered"
              style={{
                labels: {
                  fontSize: 13
                },
                polygons: {
                  fillOpacity: 0.1,
                  strokeOpacity: 1,
                  strokeWidth: 0.5
                }
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={10} md={8} lg={4}>
          <Paper>
            <RadarChart
            data={RADAR_PROPS1.data}
            domains={RADAR_PROPS1.domains}
            height={RADAR_PROPS1.height}
            width={RADAR_PROPS1.width}
            startingAngle={Math.PI / 7}
            className="overflow-okay horizontally-centered"
            style={{
              labels: {
                fontSize: 13
              },
              polygons: {
                fillOpacity: 0.1,
                strokeOpacity: 1,
                strokeWidth: 0.5
              }
            }}
          />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}