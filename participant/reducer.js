const initialState = {
	page: "waiting",
	users: {},
	red_description: 0,
	answered: 0,
	joined: 0,
	teachers: {},
	join_teacher: 0,
	

}


function reducer(state = {}, action) {
	const { type, payload } = action
	switch (type) {

		case "FETCH_CONTENTS":
			return Object.assign({}, state, {
				page: action.page,
				text: action.text,
				status: action.status,
				answered: action.answered,
				joined: action.joined,
			})

		case "CHANGE_PAGE":
			return Object.assign({}, state, {
				page: action.page,
				status: action.status,
				answered: action.answered,
				joined: action.joined,
			})

		case "ADD_USER":
			return Object.assign({}, state, {
				joined: action.joined,
				questionNo: action.questionNo,
			})
		case "SUBMIT_ANSWER":
			return Object.assign({}, state, {
				joined: action.joined,
				answered: action.answered,
				res: action.res,
			})
		case "JOIN_TEACHER":
			return Object.assign({}, state, {
				teachers: action.teachers,
				join_teacher: action.join_teacher,
			})

		default:
			return state
	}
}

export default reducer
