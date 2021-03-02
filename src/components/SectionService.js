import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles  = makeStyles({
    section: {
        background: '#783183',
        height: 150,
        paddingTop: 25 
    },
    icon: {
        color: '#FFF'
    },
    title: {
        color: '#FFF',
        fontSize: 10
    },
    row: {
        paddingTop: 25
    }
  })

const ServiceSection = () => {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <Grid container spacing={3} className={classes.row}>
                <Grid item xs={4} md={4}>
                    <StarIcon className={classes.icon}/>
                    <p className={classes.title}> Crear logro</p>
                </Grid>
                <Grid item xs={4} md={4}>
                    <LocalOfferIcon className={classes.icon}/>
                    <p className={classes.title}> Pagar servicio </p>
                </Grid>
                <Grid item xs={4} md={4}>
                    <NotificationsIcon className={classes.icon}/>
                    <p className={classes.title}>Suscripción</p>
                </Grid>
            </Grid>


        </div>
    )
}


export default ServiceSection;