import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserSummary from './UserSummary'

class LeaderBoard extends Component {
	render() {
		const { userIDs } = this.props

		return (
			userIDs.map((userID) => (
				<UserSummary key={ userID } userID={ userID } />
			))
		)
	}
}

function mapStateToProps({ users }) {


	return {
		userIDs: Object.keys(users)
						.sort((a,b) => {
							const answeredCountByNext = Object.keys(users[b].answers).length
							const QuestionsCreatedCountByNext = users[b].questions.length
							const totalByNext = answeredCountByNext + QuestionsCreatedCountByNext

							const answeredCountByCurrent = Object.keys(users[a].answers).length
							const QuestionsCreatedCountByCurrent = users[a].questions.length
							const totalByCurrent = answeredCountByCurrent + QuestionsCreatedCountByCurrent

							return totalByNext - totalByCurrent
						})
	}
}

export default connect(mapStateToProps)(LeaderBoard)