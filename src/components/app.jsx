import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'QDxkTvuDqmgy4IgE2mMHBnOqViwltTYD';

class App extends Component {
  constructor(props) {
    super(props);

    // App's state
    this.state = {
      gifs: [],
      // selectedGifId: 'xT9IgDEI1iZyb2wqo8'
      selectedGifId: null
    };

    // this.search('disney');

  }

  search = (query) => {
    // API call
    giphy({ apiKey: GIPHY_API_KEY, https: true}).search({
      q: query,
      rating: 'g', // All ages admitted – General audiences
      limit: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
