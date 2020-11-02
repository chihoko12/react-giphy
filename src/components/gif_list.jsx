import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }

  // handleClick = (event) => {
    // this.props.setState({ selectedGifId: event.target.gif.id});
    // console.log(event.gif.id)
  // }

  render() {
    return(
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
