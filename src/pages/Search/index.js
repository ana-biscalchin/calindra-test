import React from 'react';
import SearchAppBar from '../../components/nav';
import api from '../../services/api';
import { Box, Card, CardContent, Grid } from '@material-ui/core';

const defaultState = {
  inputText: '',
  products: [],
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
    console.log(e.target.value);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let inputText = this.state.inputText;
    console.log(inputText);

    if (inputText.length >= 3) {
      const response = await api.get(`/autocomplete/${inputText}`);
      let items = response.data.items;
      this.setState({
        products: items,
      });
    } else {
      console.log('não encontrei');
    }
    console.log(this.state.products);
  };

  render() {
    const { products, inputText } = this.state;

    return (
      <>
        <SearchAppBar
          value={inputText}
          onChange={this.handleInput}
          onClick={this.handleSubmit}
        />

        {products.map((i) => (
          <Card key={i.map.id} elevation={3}>
            <CardContent>
              {i.map.name}
              {i.map.defaultPrice}
            </CardContent>
          </Card>
        ))}
      </>
    );
  }
}

export default SearchPage;

{
  /* {alert === true && (
    <StatusAlert
    severity={status}
    message={message}
    onClose={() => this.hideAlert()}
    />
    )}  */
}


