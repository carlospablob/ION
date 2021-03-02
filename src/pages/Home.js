import React from 'react'
import FooterNavigation from '../components/FooterNavigation';
import { makeStyles } from '@material-ui/core/styles';
import PriceCard from '../components/PriceCard';
import HeaderBar from '../components/HeaderBar';

const useStyles  = makeStyles({
  root: {

  },
  footer: {
    background: 'blue',
    position: 'absolute',
    bottom: '0px'
  }
})

const Home = () => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <HeaderBar />
      
      <PriceCard />


      <FooterNavigation  className={classes.footer}/>
    </div>
  )


}

export default Home