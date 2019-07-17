import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { handleAddUserNewQuestion } from '../actions/users'
import { setSelectedViewMode } from '../actions/selectedViewMode'
import { withRouter } from 'react-router-dom'

class QuestionForm extends Component {

	state = {
		optionOne: null,
		optionTwo: null
	}

	handleSubmit(e) {
		e.preventDefault()

		const { authedUser, dispatch, history } = this.props
		const { optionOne, optionTwo } = this.state
		const optionOneText = optionOne
		const optionTwoText = optionTwo
		const author = authedUser
		dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }))
		dispatch(handleAddUserNewQuestion({ optionOneText, optionTwoText, author }))

		dispatch(setSelectedViewMode('unanswered'))
		history.push('/')
	}

	handleChange(e, option) {
		const optionText = e.target.value

		if (option === 'optionOne' || option === 'optionTwo') {
			this.setState({
				[option]: optionText
			})
		}
	}

	render() {
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">Create New Question</div>
			  <div className="panel-body">
			  	<div style={{ textAlign: 'left' }}>
			  		<form onSubmit={ (e)=>{ this.handleSubmit(e) } } >
				  		<h5>Complete the question</h5>
				  		<br />
					    <h4><b>Would you rather...</b></h4>
					    <input type="text" className="form-control" placeholder="Enter Option One Text Here" onChange={ (e) => { this.handleChange(e, 'optionOne') } } required />
					    <h5>- OR -</h5>
					    <input type="text" className="form-control" placeholder="Enter Option Two Text Here" onChange={ (e) => { this.handleChange(e, 'optionTwo') } } required />

					    <br />

					    <button type="submit" className="btn btn-success">
					    	Submit
					    </button>
					</form>
				</div>
			  </div>
			</div>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser
	}
}

export default withRouter(connect(mapStateToProps)(QuestionForm))


