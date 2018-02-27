import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import QuizPage from './components/QuizPage';
import ScoreBoard from './components/ScoreBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
      username: null,
      latestScore: 0,
      choices: [],
    };
  }

  doLogin=(value) => {
    const config = {
      method: 'post',
      body: JSON.stringify({ username: value }),
    };
    fetch('/login', config).then(resp => resp.json()).then((respJSON) => {
      this.setState({
        username: respJSON.username,
        latestScore: respJSON.latestScore,
        choices: respJSON.choices,
        page: 'quiz',
      });
    });
  }

  updateChoice=(quesId, optValue) => {
    console.log('here');
    const currChoices = this.state.choices;
    for (let i = 0; i < currChoices.length; i += 1) {
      if (currChoices[i].questionId === quesId) {
        currChoices[i].choice = optValue;
        break;
      }
    }
    this.setState({ choices: currChoices });
  }

saveScore=(score) => {
  this.setState({ latestScore: score, page: 'scoreboard' });
}


render() {
  console.log('::::::::::::', this.state);
  let currentComp;
  if (this.state.page === 'login') {
    currentComp = <LoginPage doLogin={this.doLogin} />;
  } else if (this.state.page === 'quiz') {
    currentComp =
      (<QuizPage
        username={this.state.username}
        latestScore={this.state.latestScore}
        choices={this.state.choices}
        updateChoice={this.updateChoice}
        saveScore={this.saveScore}
      />);
  } else {
    currentComp = <ScoreBoard score={this.state.latestScore} username={this.state.username} />;
  }
  return (
    <div>
      {currentComp}
    </div>
  );
}
}

export default App;
