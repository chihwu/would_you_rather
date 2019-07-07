import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionForm extends Component {
	render() {
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">Create New Question</div>
			  <div className="panel-body">
			  	<div style={{ textAlign: 'left' }}>
			  		<form>
				  		<h5>Complete the question</h5>
				  		<br />
					    <h4><b>Would you rather...</b></h4>
					    <input type="text" className="form-control" placeholder="Enter Option One Text Here" />
					    <h5>- OR -</h5>
					    <input type="text" className="form-control" placeholder="Enter Option Two Text Here" />

					    <br />

					    <button type="button" className="btn btn-success">
					    	Submit
					    </button>
					</form>
				</div>
			  </div>
			</div>
		);
	}
}

export default QuestionForm