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
    let flag = false;
    for (let i = 0; i < currChoices.length; i += 1) {
      if (currChoices[i].questionId === quesId) {
        currChoices[i].choice = optValue;
        flag = true;
        break;
      }
    }
    if (flag === false) {
      currChoices.push({ questionId: quesId, choice: optValue });
    }
    this.setState({ choices: currChoices });
  }

saveScore=(score) => {
  this.setState({ latestScore: score, page: 'scoreboard' });
  const options = {
    method: 'post',
    body: JSON.stringify({
      username: this.state.username,
      latestScore: score,
    }),
  };
  fetch('/saveScore', options).then(response => response.text()).then(console.log);
}

resetGame=() => {
  this.setState({
    page: 'login',
    username: null,
    latestScore: 0,
    choices: [],
  });
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
    currentComp = <ScoreBoard score={this.state.latestScore} username={this.state.username} resetGame={this.resetGame} />;
  }
  return (
    <div>
      {currentComp}
    </div>
  );
}
}

export default App;
