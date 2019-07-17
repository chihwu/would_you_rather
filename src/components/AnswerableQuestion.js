import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import { handleSaveRespondentInfo } from '../actions/users'
import { setSelectedViewMode } from '../actions/selectedViewMode'
import { withRouter, Redirect } from 'react-router-dom'

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
		
		dispatch(setSelectedViewMode('answered'))
		history.push('/')
	}

	render() {
		const { question, users } = this.props
		const author = question !== undefined ? users[question.author] : null

		return (
			author === null ?
			<Redirect to='/404' /> :
			<div className="panel panel-default">
			  <div className="panel-heading">{ author.name } asks:</div>
			  <div className="panel-body">
			  	<div className="col-md-4">
			  		<img src={ author.avatarURL } style={{ width: '100%' }} alt={ author.name } />
			  	</div>
			  	<div className="col-md-8" style={{ textAlign: 'left' }}>
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

function mapStateToProps({ users }) {
	return {
		users
	}
}

export default withRouter(connect(mapStateToProps)(AnswerableQuestion))


