import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    header: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    avatar: {
        position: 'absolute',
        right: 0,
        marginRight: 20,
        background: '#22a8d2'
    }
  }));


const HeaderBar = () => {
    const classes = useStyles();


    return (
        <div className={classes.header}>
            <AppBar position="static">
                <Toolbar>
                    <Avatar className={classes.avatar}>A</Avatar>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HeaderBar;
