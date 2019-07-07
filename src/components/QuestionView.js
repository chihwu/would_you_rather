import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionView extends Component {
	render() {
		const { question, authedUser, currentSelectionMode, users } = this.props;
		const respondents = question.optionOne.votes.concat(question.optionTwo.votes)
		const isAnsweredByCurrentUser = respondents.includes(authedUser)
		const author = users[question.author]

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
						  <div className="panel-heading">{ author.name } asks:</div>
						  <div className="panel-body">
						  	<div className="col-md-4">
						  		<img src={ author.avatarURL } style={{ width: '100%' }} alt={ author.name } />
						  	</div>
						  	<div className="col-md-8" style={{ textAlign: 'left' }}>
							    <h4>Would you rather...</h4>
							    <ul>
							    	<li>{ question.optionOne.text }</li>
							    	<li>{ question.optionTwo.text }</li>
							    </ul>

							    <Link to={ `/questions/${question.id}` } className="close-search" >
								    <button type="button" className="btn btn-info">
								    	View
								    </button>
							    </Link>
							</div>
						  </div>
						</div>
					)
				}
			</div>
		)
	}
}

function mapStateToProps({ users, questions }, props) {
	return {
		users,
		question: questions[props.questionID]
	}
}

export default connect(mapStateToProps)(QuestionView)