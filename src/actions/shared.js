import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			console.log("---------------");
			console.log(users);
			console.log(questions);
			console.log("---------------");
			dispatch(receiveUsers(users))
			dispatch(receiveQuestions(questions))
			dispatch(hideLoading)
		})
	}
}