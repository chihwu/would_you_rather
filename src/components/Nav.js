import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class Nav extends Component {

	onLogout = () => {
		const { dispatch } = this.props;
		dispatch(setAuthedUser(null))
	}

	render() {
		const { currentUserName } = this.props

		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <Link className="navbar-brand" to="/">Would You Rather</Link>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li>
			        	<NavLink to="/" exact activeClassName="active">
			        		Home <span className="sr-only">(current)</span>
			        	</NavLink>
			        </li>
			        <li>
			        	<NavLink to="/add" exact activeClassName="active">
			        		New Question
			        	</NavLink>
			        </li>
			        <li>
			        	<NavLink to="/leaderboard" exact activeClassName="active">
			        		Leader Board
			        	</NavLink>
			        </li>
			      </ul>
			      <ul className="nav navbar-nav navbar-right">
			        <li style={{
    padding: '15px 15px', color: '#777'}}>{ currentUserName && 'Hello,' }{ currentUserName }</li>
			        <li style={{
   padding: '15px 15px', color: '#777', cursor: 'pointer'}} onClick={ this.onLogout }>Logout</li>
			      </ul>
			    </div>
			  </div>
			</nav>
		)
	}

}

function mapStateToProps({ users, authedUser }) {

	const currentUser = Object.values(users).find(({ id }) => id === authedUser)
		
	let currentUserName = currentUser !== undefined && currentUser.name

	return {
		currentUserName
	}

}

export default connect(mapStateToProps)(Nav)

