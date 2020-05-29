import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    minWidth: 300,
    maxWidth: 300,
  },
}));

const CardProduct = ({ ...props }) => {
  const classes = useStyles();
  const { image, key, link, name, price } = props;
  // console.log(props);

  return (
    <Card key={key} variant="outlined" className={classes.root}>
      <CardActionArea href={link}>
        <CardMedia
          component="img"
          alt={name}
          height="300"
          image={image}
          title={name}
        />
        <CardHeader title={name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {' '}
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
