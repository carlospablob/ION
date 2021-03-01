import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
    appBar: {
      top: 'auto',
      bottom: 0
    }
  });

const FooterNavigation = () => {

    const classes = useStyles();
    const [value, setValue] = useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (

      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.footer}>

        <BottomNavigationAction value="home" icon={<HomeIcon />} />

        <BottomNavigationAction value="pay" icon={<MonetizationOnOutlinedIcon />} />

        <BottomNavigationAction value="credit" icon={<CreditCardIcon />} />

        <BottomNavigationAction value="start" icon={<StarBorderOutlinedIcon />} />

        <BottomNavigationAction value="notification" icon={<NotificationsNoneOutlinedIcon />} />

        </BottomNavigation>
      </AppBar>
    )
}

export default FooterNavigation;
