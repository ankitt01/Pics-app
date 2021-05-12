import './App.css';
import SearchBar from './Searchbar'
import axios from 'axios'
import React, { Component } from 'react';

class App extends React.Component {
  state = {  }
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term}, 
      headers: {
        Authorization: 'Client-ID -uyLIs1pg5YXEUCWuE0GmWPXO0yuoazSBvqfTgOCZG8'
      }     
    })

    console.log(response.data.results)
  }
  render() { 
    return ( 
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
     );
  }
}
 


export default App;

//-uyLIs1pg5YXEUCWuE0GmWPXO0yuoazSBvqfTgOCZG8  Access key
//Secret key gQ0ttZeUtxY6fG1ZwwsN7n70XL-Myyr8jD4FW_l6zZo