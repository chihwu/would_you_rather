import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionSummary extends Component {

	render() {
		const { question, authedUser, users } = this.props

		const optionOneCount = question.optionOne.votes.length
		const optionTwoCount = question.optionTwo.votes.length
		const totalCount = optionOneCount + optionTwoCount

		const optionOneCountPercent = (optionOneCount / totalCount).toFixed(2) * 100
		const optionTwoCountPercent = (optionTwoCount / totalCount).toFixed(2) * 100

		const isOptionOneMyChoice = question.optionOne.votes.includes(authedUser) ? true : false
		const isOptionTwoMyChoice = question.optionTwo.votes.includes(authedUser) ? true : false

		const author = users[question.author]

		return (
			<div className="panel panel-default">
			  <div className="panel-heading">Asked by { author.name }</div>
			  <div className="panel-body">
			  	<div className="col-md-4">
			  		<img src={ author.avatarURL } style={{ width: '100%' }} alt={ author.name } />
			  	</div>
			  	<div className="col-md-8" style={{ textAlign: 'left' }}>
				    <h4>Results: </h4>
				    <div>
				    	<div className="well">
						  	<label>
						    	Would you rather { question.optionOne.text }? 

						    	{
						    		isOptionOneMyChoice && (
						    			<span className="label label-default">Your choice</span>
						    		)
						    	}
						    	
						  	</label>
						  	<div className="progress">
							  <div className="progress-bar" role="progressbar" aria-valuenow={ optionOneCountPercent } aria-valuemin="0" aria-valuemax="100" style={{ width: `${optionOneCountPercent}%` }}>
							    { optionOneCountPercent }%
							  </div>
							</div>
							<p>{ optionOneCount } out of { totalCount } votes</p>
						</div>
						<div className="well">
						  	<label>
						    	Would you rather { question.optionTwo.text }?
						    	
						    	{
						    		isOptionTwoMyChoice && (
						    			<span className="label label-default">Your choice</span>
						    		)
						    	}
						  	</label>
						  	<div className="progress">
							  <div className="progress-bar" role="progressbar" aria-valuenow={ optionTwoCountPercent } aria-valuemin="0" aria-valuemax="100" style={{ width: `${optionTwoCountPercent}%` }}>
							    { optionTwoCountPercent }%
							  </div>
							</div>
							<p>{ optionTwoCount } out of { totalCount } votes</p>
						</div>

					</div>
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

export default connect(mapStateToProps)(QuestionSummary)

