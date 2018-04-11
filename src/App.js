import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [{ name: 'James' }, { name: 'Joe' }],
    textInput: '',
  }

  handUserAdd = () => {
    this.setState({
      users: [...this.state.users, { name: this.state.textInput }],
      textInput: '',
    });
  }

  handleChange = (e) => {
    this.setState({ textInput: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserInput
          textInput={this.state.textInput}
          handleChange={this.handleChange.bind(this)}
          onClick={this.handUserAdd}
        />
        {this.state.users.map(user =>
          (<UserOutput
            key={user.name}
            name={user.name}
          />))}
      </div>
    );
  }
}

export default App;
