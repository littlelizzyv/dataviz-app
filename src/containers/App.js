import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../assets/app.scss';
import Navigation from '../components/navigation/navigation';
import HomePage from '../components/homePage/homepage';
import PersonaPage from '../components/personaPage/personas';
import TopicsPage from '../components/topicPage/topics';


import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Chart from '../components/chart/chart'
import useStyles from '../assets/theme/material-ui-theme';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const drawerStyles = makeStyles((theme)=> ({
  toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  },
  appBarShift: {
      marginLeft: drawerWidth,
      width: '100%',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarSpacer: theme.mixins.toolbar
}));

function App() {

  // const [show, setShow] = useState(false)

  // const handleClick=(event)=>{

  //   console.log(event.target)
  //   let newShow = !show
  //   setShow(newShow)

  // }
  const drawerClasses = drawerStyles();
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
 
    return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Navigation />
        <main className={classes.content, open && drawerClasses.appBarShift} >
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route exact path="/">
              <Container maxWidth="lg" className={classes.container}>
               <HomePage />
                <Grid container spacing={3}>
                  {/* Chart */}
                  <Grid item xs={10} md={8} lg={12}>
                    <Paper className={fixedHeightPaper}>
                      <Chart />
                    </Paper>
                  </Grid>
                  {/* Recent Deposits */}
                  <Grid item xs={10} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                    
                    </Paper>
                  </Grid>
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      
                    </Paper>
                  </Grid>
                </Grid>
                <Box pt={4}>
                </Box>
              </Container>
            </Route>
            <Route path="/personas">
              <Container maxWidth="xl" className={classes.container}>
                <PersonaPage />
              </Container>
            </Route>
            <Route path="/topics">
              <Container maxWidth="xl" className={classes.container}>
                <TopicsPage />
              </Container>
            </Route>
        </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
