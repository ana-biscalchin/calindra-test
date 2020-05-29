import React from 'react';
import { Grid, } from '@material-ui/core';
import sadLogo from '../../assets/sad-not-found.svg';
import api from '../../services/api';
import CardProduct from '../../components/cardProduct';
import SearchAppBar from '../../components/nav';
import Progress from '../../components/circularProgress';

const defaultState = {
  inputText: '',
  progress: false,
  products: [],
  notFound: false,
};

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      inputText: e.target.value,
    });
    console.log(this.state.inputText);
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ progress: true, notFound: false });
    let inputText = this.state.inputText;
    const response = await api.get(`${inputText}`);
    let items = response.data.items;
    // console.log(typeof(items));
    // console.log(items)
    if (items.length === 0) {
      this.setState({
        notFound: true,
        progress: false,
      });
    } else {
      this.setState({
        products: items,
        progress: false,
      });
    }
  };

  render() {
    const { notFound, progress, products, inputText } = this.state;

    return (
      <>
        <SearchAppBar
          buttonText={'Buscar'}
          value={inputText}
          onChange={this.handleInput}
          onClick={this.handleSubmit}
        />
        <Grid margin={3} item xs={12}>
          <Grid container display="flex" justify="center">
            {products.map((i) => (
              <CardProduct
                key={i.map.id[0]}
                link={`https://store.omelete.com.br/${i.map.uri}`}
                image={
                  `https://static-store.worldticket.com.br/` +
                  i.map['images.url'][0]
                }
                name={i.map.name[0]}
                price={i.map.salePrice[0].toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              />
            ))}
            {progress === true && <Progress />}
            {notFound === true && (
              <CardProduct image={sadLogo} name="Não encontramos o produto" />
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default SearchPage;
