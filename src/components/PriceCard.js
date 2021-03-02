import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    cardPrice: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  });

const PriceCard = () => {

  const classes = useStyles();

    return (
        <Card className={classes.cardPrice}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                SALDO DISPONIBLE
            </Typography>
            <Typography variant="h5" component="h2">
                $1,449,970.00
            </Typography>
            </CardContent>
      </Card>
    )
}

export default PriceCard;
