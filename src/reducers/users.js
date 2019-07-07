import { RECEIVE_USERS, SAVE_RESPONDENT_INFO, ADD_USER_NEW_QUESTION } from '../actions/users'

export default function users(state = {}, action) {
	switch(action.type) {
		case RECEIVE_USERS: 
			return {
				...state,
				...action.users
			}
		case SAVE_RESPONDENT_INFO:
			return {
				...state,
				[action.authedUser]: {
					...state[action.authedUser],
					answers: {
						...state[action.authedUser].answers,
						[action.qid]: action.answer
					}
				}
			}
		case ADD_USER_NEW_QUESTION:
			const { author } = action.question
			return {
				...state,
				[author]: {
					...state[author],
					questions: state[author].questions.concat([action.question.id])
				}
			}
		default:
			return state
	}
}