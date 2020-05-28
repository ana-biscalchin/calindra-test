import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import logo from "../assets/egg.svg";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    border: 1,
    borderColor: '#FFBF00',
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
  inputRoot: {
    // color: 'default',
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
}));

const SearchAppBar = ({ ...props }) => {
  const classes = useStyles();
  const { value, onChange, onClick } = props;
  console.log(props)
  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar>
        {/* <div>

        <image src={logo}/>
        </div> */}
          <Typography className={classes.title} variant="h6" noWrap>
            OVO FRITO
          </Typography>
          <div className={classes.search}>
            <InputBase
              required
              aria-label="search"
              placeholder="Busque o produto…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={value}
              onChange={onChange}
            />
            <Button onClick={onClick}>
              {' '}
              <SearchIcon />
              Buscar
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchAppBar;
