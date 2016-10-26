import { createAction } from 'redux-actions'

export const fetchContents = createAction('fetch contents')
export const submitAnswer = createAction('submit answer', result => result) 
export const teacherSubmitAnswer = createAction('teacher submit answer', result => result) 
export const joinTeacher= createAction('join teacher', value => value)
