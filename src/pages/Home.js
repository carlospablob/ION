import React from 'react'
import FooterNavigation from '../components/FooterNavigation';
import { makeStyles } from '@material-ui/core/styles';

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
      <h3>Hello Home</h3>





      <FooterNavigation  className={classes.footer}/>
    </div>
  )


}

export default Home