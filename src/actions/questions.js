import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

function answerQuestion({ authedUser, qid, answer }) {
	return {
		type: ANSWER_QUESTION,
		qid, 
		authedUser,
		answer
	}
}

export function handleAnswerQuestion(info) {
	return (dispatch) => {
		dispatch(answerQuestion(info))

		return saveQuestionAnswer(info)
					.catch((e) => {
						console.warn('Error in handleAnswerQuestion: ', e)
						dispatch(answerQuestion(info))
						alert('There was an error adding the answer to the question. Try again.')
					})
	}
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

export function handleAddQuestion(info) {
	return (dispatch) => {
		
		dispatch(showLoading())
		return saveQuestion(info)
					.then((question) => {
						dispatch(addQuestion(question))
					})
					.then(() => {
						dispatch(hideLoading())
					})
	}
}
