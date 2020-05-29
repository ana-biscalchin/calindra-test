import React from 'react';
import {
  AppBar,
  CardMedia,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import logo from '../assets/ovofrito.png';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  search: {
    position: 'relative',
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '28ch',
      },
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const SearchAppBar = ({ ...props }) => {
  const classes = useStyles();
  const { buttonText, value, onChange, onClick } = props;
  // console.log(props)
  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar  >
          <IconButton>
            <CardMedia
              component="img"
              alt="Ovo Frito"
              image={logo}
              title="Ovo Frito Logo"
            />
          </IconButton>

          <div className={classes.search}>
            <InputBase
              required
              aria-label="search"
              placeholder="Busque o produto…"
              classes={{
                input: classes.inputInput,
              }}
              value={value}
              onChange={onChange}
            />
            <Button onClick={onClick}>
              {' '}
              <SearchIcon />
              {buttonText}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
