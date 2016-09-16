const initialState = {
	page: "waiting",
	users: {},
	red_description: 0,
	answered: 0,
	joined: 0,
	text: {
    descriptions: [
      {id: 0, text: "説明1",},
      {id: 1, text: "説明2",},
      {id: 2, text: "説明3",},
      ],
	  answers: [
      "プログラマ",
      "銀行員",
      "プログラマで自然保護活動家",
    ]
	}
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
		case "FINISH_DESCRIPTION":
      return Object.assign({}, state, {
        users: action.users,
        red_description: action.red_description,
      })

		default:
			return state
	}
}

export default reducer
