import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import { handleSaveRespondentInfo } from '../actions/users'
import { withRouter } from 'react-router-dom'

class AnswerableQuestion extends Component {

	state = {
		answer: 'optionOne'
	}

	handleChange(answer) {
		this.setState({
			answer
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		const { answer } = this.state
		const qid = this.props.question.id
		const { authedUser, dispatch, history } = this.props

		dispatch(handleAnswerQuestion({ authedUser, qid, answer }))
		dispatch(handleSaveRespondentInfo({ authedUser, qid, answer }))
		
		history.push('/')
	}

	render() {
		const { question, authedUser } = this.props

		return (
			<div className="panel panel-default">
			  <div className="panel-heading">{ question.author } asks:</div>
			  <div className="panel-body">
			  	<div style={{ textAlign: 'left' }}>
				    <h4>Would you rather...</h4>
				    <form onSubmit={ (e) => { this.handleSubmit(e) } }>
				    	<div className="radio">
						  <label>
						    <input type="radio" name="optionSelected" id="optionSelected" value="optionOne" onChange={ () => { this.handleChange('optionOne') } } checked={this.state.answer==='optionOne' ? true : false} />
						    { question.optionOne.text }
						  </label>
						</div>
						<div className="radio">
						  <label>
						    <input type="radio" name="optionSelected" id="optionSelected" value="optionTwo" onChange={ () => { this.handleChange('optionTwo') } } checked={this.state.answer==='optionTwo' ? true : false} />
						    { question.optionTwo.text }
						  </label>
						</div>

					    <button type="submit" className="btn btn-success">
					    	Submit
					    </button>
					</form>
				</div>
			  </div>
			</div>
		)
	}

}

export default withRouter(connect()(AnswerableQuestion))


