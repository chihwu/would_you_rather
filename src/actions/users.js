import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_RESPONDENT_INFO = 'SAVE_RESPONDENT_INFO'
export const ADD_USER_NEW_QUESTION = 'ADD_USER_NEW_QUESTION'

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}

function saveRespondentInfo({ authedUser, qid, answer }) {
	return {
		type: SAVE_RESPONDENT_INFO,
		qid, 
		authedUser,
		answer
	}
}

export function handleSaveRespondentInfo(info) {
	return (dispatch) => {
		dispatch(saveRespondentInfo(info))

		return saveQuestionAnswer(info)
					.catch((e) => {
						console.warn('Error in handleSaveRespondentInfo: ', e)
						dispatch(saveRespondentInfo(info))
						alert('There was an error saving the info of respondent. Try again.')
					})
	}
}

function addUserNewQuestion(question) {
	return {
		type: ADD_USER_NEW_QUESTION,
		question
	}
}

export function handleAddUserNewQuestion(info) {
	return (dispatch) => {
		dispatch(showLoading())
		return saveQuestion(info)
					.then((question) => {
						dispatch(addUserNewQuestion(question))
					})
					.then(() => {
						dispatch(hideLoading())
					})
	}
}



