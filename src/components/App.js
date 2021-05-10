import './App.css';
import SearchBar from './Searchbar'
import React, { Component } from 'react';

class App extends Component {
  state = {  }
  onSearchSubmit(term) {
    console.log(term);
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