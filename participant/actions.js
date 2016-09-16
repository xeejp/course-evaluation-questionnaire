import { createAction } from 'redux-actions'

export const fetchContents = createAction('fetch contents')
export const submitAnswer = createAction('submit answer', result => result )
export const finishDescription = createAction('finish description')
