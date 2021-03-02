import React from 'react'
import FooterNavigation from '../components/FooterNavigation';
import { makeStyles } from '@material-ui/core/styles';
import PriceCard from '../components/PriceCard';
import HeaderBar from '../components/HeaderBar';
import ServiceSection from '../components/SectionService';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles  = makeStyles((theme) => ({
  root: {

  },
  footer: {
    background: 'blue',
    position: 'absolute',
    bottom: '0px'
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const Home = () => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderBar />

      <Paper className={classes.paper}>
        <Grid container spacing={3} className={classes.row}>

          <Grid item xs={12} md={12} lg={12}>
            <PriceCard />
            
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <ServiceSection />
          </Grid>

        </Grid>
      </Paper>




      <FooterNavigation  className={classes.footer}/>
    </div>
  )


}

export default Home