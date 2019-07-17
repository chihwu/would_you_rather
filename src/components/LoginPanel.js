import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class LoginPanel extends Component {
	state = {
		userID: null
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const { userID } = this.state;
		const { dispatch, history } = this.props;
		dispatch(setAuthedUser(userID))

		this.setState(() => ({
			userID: ''
		}));

		history.push('/')
	}

	handleChange = (e) => {
		const userID = e.target.value

		this.setState(() => ({
			userID
		}));
	}

	render() {
		return (
			<form onSubmit={ this.handleSubmit }>
			  <fieldset>
			    <div className="form-group">
			      <label htmlFor="login">Select User:</label>
			      <select id="login" className="form-control" onChange={ this.handleChange }>
			        <option value=''>Select an user</option>
			        {
			        	this.props.users.map((user) => (
			        		<option key={ user.id } value={ user.id }> 
			        			{ user.name }
			        		</option>
			        	))
			        }
			      </select>
			    </div>

			    <button type="submit" className="btn btn-primary">Submit</button>
			  </fieldset>
			</form>
		);
	}
}

function mapStateToProps({ users }) {

	const usersList = Object.values(users).map(({ id, name }) => ({
		id,
		name
	}))

	return {
		users: usersList
	}


}

export default withRouter(connect(mapStateToProps)(LoginPanel))


