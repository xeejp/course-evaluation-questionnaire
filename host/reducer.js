const initialState = {
	started: false
}

function reducer(state = initialState ,action) {
  switch (action.type) {
	case 'START':
		  return Object.assign({},state,{
			  started: true
		  })
	case 'STOP':
		  return Object.assign({},state,{
			  started: false
		  })

    default:
      return state
  }
}

export default reducer
