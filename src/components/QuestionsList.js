import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionView from './QuestionView'
import { setSelectedViewMode } from '../actions/selectedViewMode'
import { Link } from 'react-router-dom'

class QuestionsList extends Component {

	state = {
		currentSelectionMode: 'unanswered'
	}

	componentDidMount() {
		this.props.selectedViewMode === null ? this.hanldeSelection('unanswered') : this.hanldeSelection(this.props.selectedViewMode)
	}

	hanldeSelection = (selection) => {
		const { dispatch } = this.props

		dispatch(setSelectedViewMode(selection))

		this.setState(() => ({
			currentSelectionMode: selection
		}))
	}

	render() {
		const { questionsID, authedUser } = this.props;

		return (
			<div>
				<ul className="nav nav-tabs" style={{ width: '100%' }}>
				  <li className={ this.state.currentSelectionMode === 'unanswered' ? 'active' : '' } style={{ width: '50%', cursor: 'pointer' }} onClick={() => { this.hanldeSelection('unanswered') } }><Link to="#">Unanswered</Link></li>
				  <li className={ this.state.currentSelectionMode === 'answered' ? 'active' : '' } style={{ width: '50%', cursor: 'pointer' }} onClick={() => { this.hanldeSelection('answered') } }><Link to="#">Answered</Link></li>
				</ul>
				<div>
					{
						questionsID.map((id) => (
							<QuestionView key={ id } questionID={ id } authedUser={ authedUser } currentSelectionMode={ this.state.currentSelectionMode } />
						))
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions, authedUser, selectedViewMode }) {

	return {
		questionsID: Object.keys(questions)
						.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		authedUser,
		selectedViewMode
	}
}

export default connect(mapStateToProps)(QuestionsList)