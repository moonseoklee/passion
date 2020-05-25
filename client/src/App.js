import React, { Component } from 'react';



class App extends Component {

    state = {username: null};

    componentDidMount() {
        fetch('/moon')
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
          <div>
              {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          </div>
      </div>
    );
  }
}

export default App;


