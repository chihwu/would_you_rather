import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnswerableQuestion from './AnswerableQuestion'
import QuestionSummary from './QuestionSummary'

class QuestionPanel extends Component {
	render() {
		const { question_id } = this.props.match.params
		const { questions, selectedViewMode, authedUser } = this.props

		// const question = questions[question_id]

		return 	(
					selectedViewMode === 'unanswered' || selectedViewMode === null ?
					<AnswerableQuestion question={ questions[question_id] } authedUser={ authedUser } /> :
					<QuestionSummary question={ questions[question_id] } authedUser={ authedUser } />
				);
	}
}

function mapStateToProps({ questions, selectedViewMode, authedUser }) {

	return {
		questions,
		selectedViewMode,
		authedUser
	}
}

export default connect(mapStateToProps)(QuestionPanel)