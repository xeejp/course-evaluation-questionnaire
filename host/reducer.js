const initialState = {
	page: "waiting",
	users: {},
	red_description: 0,
	student_answered: 0,
	answered: 0,
	joined: 0,
}

function reducer(state = initialState, action) {
	const { type, payload } = action
	switch (type) {
		case "ADD_USER" :
			console.log("ADD_USER")
			return Object.assign({}, state, {
				users: action.users,
				joined: action.joined,
			})

		case "CHANGE_PAGE":
			console.log("CHANGE_PAGE")
			return Object.assign({}, state, {
				page: action.page,
				answered: action.answered,
				joined: action.joined,
			})
		case "SUBMIT_ANSWER":
			return Object.assign({}, state, {
				joined: action.joined,
				student_answered: action.student_answered,
				answered: action.answered,
				res: action.res,
			})
		case "TEACHER_SUBMIT_ANSWER":
			return Object.assign({}, state, {
				joined: action.joined,
				teacher_answered: action.teacher_answered,
				answered: action.answered,
				res: action.res,
			})

		default:
			return state
	}
}

export default reducer
