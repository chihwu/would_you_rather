import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionSummary extends Component {

	render() {
		const { question, authedUser } = this.props

		return (
			<div className="panel panel-default">
			  <div className="panel-heading">Asked by { question.author }</div>
			  <div className="panel-body">
			  	<div style={{ textAlign: 'left' }}>
				    <h4>Results: </h4>
				    <div>
				    	<div className="well">
						  	<label>
						    	Would you rather { question.optionOne.text }? <span className="label label-default">Your choice</span>
						  	</label>
						  	<div className="progress">
							  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
							    60%
							  </div>
							</div>
						</div>
						<div className="well">
						  	<label>
						    	Would you rather { question.optionTwo.text }?
						  	</label>
						  	<div className="progress">
							  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}>
							    60%
							  </div>
							</div>
						</div>
						
					</div>
				</div>
			  </div>
			</div>
		)
	}

}

export default QuestionSummary