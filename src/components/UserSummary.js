import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserSummary extends Component {
	render() {
		const { user } = this.props

		console.log("########");
		console.log(user.answers);
		console.log("########");

		const answeredCount = Object.keys(user.answers).length 
		const QuestionsCreatedCount = user.questions.length
		const totalScore = answeredCount + QuestionsCreatedCount

		return (
			<div className="row panel panel-default">
				<br />
				<div className="col-md-8">
					<div className="panel panel-default">
					  <div className="panel-heading">{ user.name }</div>
					  <div className="panel-body">
					  	<div className="row" style={{ textAlign: 'left' }}>
						    <div className="col-md-8">
						    	Answered Questions
						    </div>
						    <div className="col-md-4">
						    	{ answeredCount }
						    </div>
						</div>
						<div className="row" style={{ textAlign: 'left' }}>
						    <div className="col-md-8">
						    	Created Questions
						    </div>
						    <div className="col-md-4">
						    	{ QuestionsCreatedCount }
						    </div>
						</div>
					  </div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="panel panel-default">
					  <div className="panel-heading">Score</div>
					  <div className="panel-body">
					  	<div style={{ textAlign: 'center' }}>
						   <h4>{ totalScore }</h4>
						</div>
					  </div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ users }, props) {
	const { userID } = props

	return {
		user: users[userID]
	}
}

export default connect(mapStateToProps)(UserSummary)


