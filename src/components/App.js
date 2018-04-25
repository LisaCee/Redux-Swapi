import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { getCharacters } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    // console.log(this.props.results);
    return (
      <div className="App">
          {this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <ul>
              {this.props.chars.map(char => {
                return <li key={char.name}>{char.name}</li>;
              })}
            </ul>
          )}
        {/* <p>Render</p> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.charsReducer);
  // console.log(state);
  return {
    chars: state.chars,
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { getCharacters })(App);
