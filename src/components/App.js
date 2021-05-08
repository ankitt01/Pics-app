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
