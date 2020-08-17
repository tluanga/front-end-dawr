import React from "react";
import './NavBar.css'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar'
import { deepOrange, green } from '@material-ui/core/colors';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width:'200px'
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  item: {
    flexGrow: 2,
    textDecoration: 'none',
    color:'white'
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/' className='nav__avatar'>
            <Avatar variant="square" className={classes.square}>
              Dawr Manager
          </Avatar>
         </Link>
          
          {/* <Typography variant="h7" className={classes.title}>
            Dawr-Manager
          </Typography> */}
          <IconButton  color='primary'>
            <HomeIcon/>

          </IconButton>
          <Link to='/' className={classes.item}>
            <Typography variant='h6' >
              HOME
          </Typography>
          </Link>
          <Link to='/inventory' className={classes.item}>
            <Typography variant='h6' >
              INVENTORY
          </Typography>
          </Link>
          <Link to='/pos' className={classes.item}>
            <Typography variant='h6' >
              POS
          </Typography>
          </Link>
         
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


