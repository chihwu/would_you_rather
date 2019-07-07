import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Nav from './components/Nav'
import LoginPanel from './components/LoginPanel'
import LeaderBoard from './components/LeaderBoard'
import QuestionForm from './components/QuestionForm'
import QuestionPanel from './components/QuestionPanel'
import QuestionsList from './components/QuestionsList'
import LoadingBar from 'react-redux-loading'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
            <Nav />
            <div className="container">
              <div style={{ width: '40%', minWidth: '400px', margin: '0 auto' }}>
                {
                  this.props.logged_in === true
                  ? <LoginPanel />
                  : <div>
                      <Route path='/' exact component={ QuestionsList } />
                      <Route path='/questions/:question_id' component={ QuestionPanel } />
                      <Route path='/add' component={ QuestionForm } />
                      <Route path='/leaderboard' component={ LeaderBoard } />
                    </div>
                }
              </div>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    logged_in: authedUser === null || authedUser === ''
  }
}

export default connect(mapStateToProps)(App);
