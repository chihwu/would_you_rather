import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnswerableQuestion extends Component {

	render() {
		const { question, authedUser } = this.props

		return (
			<div className="panel panel-default">
			  <div className="panel-heading">{ question.author } asks:</div>
			  <div className="panel-body">
			  	<div style={{ textAlign: 'left' }}>
				    <h4>Would you rather...</h4>
				    <form>
				    	<div className="radio">
						  <label>
						    <input type="radio" name="optionSelected" id="optionSelected" value="optionOne" onChange={ () => {} } checked />
						    { question.optionOne.text }
						  </label>
						</div>
						<div className="radio">
						  <label>
						    <input type="radio" name="optionSelected" id="optionSelected" value="optionTwo" onChange={ () => {} } />
						    { question.optionTwo.text }
						  </label>
						</div>

					    <button type="button" className="btn btn-success">
					    	Submit
					    </button>
					</form>
				</div>
			  </div>
			</div>
		)
	}

}

export default AnswerableQuestion