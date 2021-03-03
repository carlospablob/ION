import React from 'react'
import FooterNavigation from '../components/FooterNavigation';
import { makeStyles } from '@material-ui/core/styles';
import PriceCard from '../components/PriceCard';
import HeaderBar from '../components/HeaderBar';
import ServiceSection from '../components/SectionService';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardPayment from '../components/CardPayment';

const useStyles  = makeStyles((theme) => ({
  root: {
  },
  footer: {
    background: 'blue',
    position: 'absolute',
    bottom: '0px'
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

const Home = () => { 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderBar />

      <Paper className={classes.paper}>
        <Grid container spacing={3}>

          <Grid item xs={12} md={12} lg={12} className={classes.row}>
            <PriceCard />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <ServiceSection />
          </Grid>

          <Grid item xs={12} md={12} lg={12} className={classes.row}>
            <CardPayment />
          </Grid>

        </Grid>
      </Paper>

      <FooterNavigation  className={classes.footer}/>
    </div>
  )


}

export default Home