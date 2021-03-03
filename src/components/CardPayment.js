import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  cardPayment: {
    width: '80%',
  },
  title: {
    fontSize: 14,
    textAlign: 'left'
  },
  numPayment: {
      fontSize: 24,
      color: '#333333',
      textAlign: 'left',
      fontWeight: 'bold'
  },
  date: {
    fontWeight: 'bold',
    textAlign: 'left'
  },
  contentEnd: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'end'
  },
  quantity: {
      textAlign: 'right'
  }
});

const CardPayment = () => {
    const classes = useStyles();

    return (
   <Card className={classes.cardPayment}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Tu proximo pago 
        </Typography>
        <Typography variant="h5" component="h2" className={classes.numPayment}>
          $28,860.00
        </Typography>

        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Fecha de pago 
                </Typography>
                <Typography variant="h6" component="h2" className={ classes.date }>
                    16 de Enero
                </Typography>
            </Grid>

            <Grid item xs={6} className={classes.contentEnd}>
                <Button variant="contained" color="primary" >
                    Pagar ahora
                </Button>
            </Grid>
        </Grid>


        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography className={classes.title} >
                    Mis logros
                </Typography>
            </Grid>

            <Grid item xs={6} className={classes.contentEnd}>
                <Typography className={classes.quantity} gutterBottom >
                    $27,260.00
                </Typography>                
            </Grid>

            <Grid item xs={6}>
                <Typography className={classes.title} >
                    Compras con TDC
                </Typography>
            </Grid>
            
            <Grid item xs={6}>
                <Typography className={classes.quantity} >
                    $1,600.00
                </Typography>
            </Grid>
        </Grid>
        
      </CardContent>

    </Card>
    )
}


export default CardPayment;

