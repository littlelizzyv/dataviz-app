import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsRounded from '@material-ui/icons/AppsRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EmojiPeopleRounded from '@material-ui/icons/EmojiPeopleRounded';
import ForumRounded from '@material-ui/icons/ForumRounded';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useStyles from '../../assets/theme/material-ui-theme';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

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
      drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        }
      },
      toolbarIconHidden: {
          display: 'none'
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      appBarSpacer: theme.mixins.toolbar,
      menuButton: {
        margin: '0 auto',
      },
      menuButtonHidden: {
        display: 'none',
      },
      drawerStyle: {
        backgroundColor: '#D1E9EE'
      },
      toolbarStyle: {
        backgroundColor: '#03C3A3'
      }
}));

export default function Navigation() { 

    const classes = useStyles();
    const drawerClasses = drawerStyles();

    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    

  return (
    <div>
      <AppBar position="absolute" className={clsx(drawerClasses.appBar, drawerClasses.toolbarStyle, open && drawerClasses.appBarShift)}>
        <Toolbar className={drawerClasses.toolbar}>
            
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, drawerClasses.drawerStyle, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
          <div className={classes.toolbarIcon}></div>
            {/* <div className={classes.toolbarIcon, !open && drawerClasses.toolbarIconHidden}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(drawerClasses.menuButton, open && drawerClasses.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
            <Divider /> */}
            <List>
              <Link to="/">
               <ListItem button>
                     <ListItemIcon>
                         <AppsRounded />
                     </ListItemIcon>
                     <ListItemText primary="Home" />
                 </ListItem>
               </Link>
               <Link to="/topics">
                     <ListItem button>
                        <ListItemIcon>
                            <ForumRounded />
                         </ListItemIcon>
                         <ListItemText primary="Topics" />
                     </ListItem>
                 </Link>
               <Link to="/personas">
                     <ListItem button>
                        <ListItemIcon>
                            <EmojiPeopleRounded />
                         </ListItemIcon>
                         <ListItemText primary="Personas" />
                     </ListItem>
                 </Link>
            </List>
          </Drawer>
        </div>
    // <div className="navigation">
    //     <Drawer
    //         variant="permanent"
    //         classes={{
    //         paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
    //         }}
    //         open={open}
    //     >
    //         <div className={classes.toolbarIcon}>
    //             <IconButton onClick={handleDrawerClose}>
    //                 <ChevronLeftIcon />
    //             </IconButton>
    //         </div>
    //         <List>
    //             <Link to="/">
    //             <ListItem button>
    //                 <ListItemIcon>
    //                     <DashboardIcon />
    //                 </ListItemIcon>
    //                 <ListItemText primary="Home" />
    //             </ListItem>
    //             </Link>
    //             <Link to="/personas">
    //                 <ListItem button>
    //                     <ListItemIcon>
    //                         <ShoppingCartIcon />
    //                     </ListItemIcon>
    //                     <ListItemText primary="Personas" />
    //                 </ListItem>
    //             </Link>
    //         </List>
    //     </Drawer>
    // </div>
  );
}

