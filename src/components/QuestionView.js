import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionView extends Component {
	render() {
		const { question, authedUser, currentSelectionMode } = this.props;
		const respondents = question.optionOne.votes.concat(question.optionTwo.votes)
		const isAnsweredByCurrentUser = respondents.includes(authedUser)

		let displayed = true
		if (currentSelectionMode === 'unanswered' && isAnsweredByCurrentUser) {
			displayed = false
		} else if (currentSelectionMode === 'answered' && !isAnsweredByCurrentUser) {
			displayed = false
		}

		return (
			<div>
				{
					displayed && (
						<div className="panel panel-default">
						  <div className="panel-heading">{ question.author } asks:</div>
						  <div className="panel-body">
						  	<div style={{ textAlign: 'left' }}>
							    <h4>Would you rather...</h4>
							    <ul>
							    	<li>{ question.optionOne.text }</li>
							    	<li>{ question.optionTwo.text }</li>
							    </ul>

							    <button type="button" className="btn btn-info">
							    	<Link to={ `/questions/${question.id}` } className="close-search" >View</Link>
							    </button>
							</div>
						  </div>
						</div>
					)
				}
			</div>
		)
	}
}

function mapStateToProps({ questions }, props) {
	return {
		question: questions[props.questionID]
	}
}

export default connect(mapStateToProps)(QuestionView)