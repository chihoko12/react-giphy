import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import '../assets/stylesheets/application.scss';

// const Hello = (props) => {
//   return (
//     <div>
//       Hello,
//       {props.name}
//     </div>
//   );
// };

// const Hello = (props) => {
//   return (
//     <div className="root">
//       <h1>Hello, {props.name}</h1>
//     </div>
//     );
// }

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: true,
      counter: 0
    };
  }

  handleClick = () => {
    // TODO: change the state!
    this.setState ({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    // BUILD AND RETURN HTML
    return (
      <div className={this.state.clicked? 'clicked' : null}
        onClick={this.handleClick}>
      Hello {this.props.name} {this.state.counter}
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Boris" />, root);
}

