import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }


  render() {
    // initial gis on the left
    if (!this.props.id) {
      return null;
    }

    const src = `https://media4.giphy.com/media/${this.props.id}/200.gif`
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
