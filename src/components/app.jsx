import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // App's state
    this.state = {
      gifs: [],
      selectedGifId: null
    }

    this.search("disney");
  }

  search = (query) => {
    // API call
    giphy('QDxkTvuDqmgy4IgE2mMHBnOqViwltTYD').search({
      q: query,
      rating: 'g', // All ages admitted – General audiences
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      })
    });
  }


  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
      );
  }
}

export default App;
