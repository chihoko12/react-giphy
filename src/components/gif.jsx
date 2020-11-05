import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }


  render() {
    //initial selectedGif on the left
    if (!this.props.id) {
      return null;
    }

    //Destructuring
    // const { id } = this.props;
    // if (!id) {
    //   return null;
    // }

    const src = `https://media4.giphy.com/media/${this.props.id}/200.gif`
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
