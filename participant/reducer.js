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

		default:
			return state
	}
}

export default reducer
