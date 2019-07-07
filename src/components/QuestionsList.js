import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionView from './QuestionView'
import { setSelectedViewMode } from '../actions/selectedViewMode'

class QuestionsList extends Component {

	state = {
		currentSelectionMode: 'unanswered'
	}

	componentDidMount() {
		this.hanldeSelection('unanswered')
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
				  <li className={ this.state.currentSelectionMode === 'unanswered' ? 'active' : '' } style={{ width: '50%', cursor: 'pointer' }} onClick={() => { this.hanldeSelection('unanswered') } }><a href="#">Unanswered</a></li>
				  <li className={ this.state.currentSelectionMode === 'answered' ? 'active' : '' } style={{ width: '50%', cursor: 'pointer' }} onClick={() => { this.hanldeSelection('answered') } }><a href="#">Answered</a></li>
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

function mapStateToProps({ questions, authedUser }) {
	return {
		questionsID: Object.keys(questions)
						.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		authedUser
	}
}

export default connect(mapStateToProps)(QuestionsList)