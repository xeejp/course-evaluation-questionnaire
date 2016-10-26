import { put, take, call, fork } from 'redux-saga/effects'
import { fetchContents ,submitAnswer, joinTeacher, teacherSubmitAnswer } from './actions'

function* fetchContentsSaga() {
  while (true) {
    yield take(`${fetchContents}`)
    yield call(sendData, 'fetch contents')
  }
}

function* submitAnswerSaga() {
  while (true) {
    const { payload } = yield take(`${submitAnswer}`)
    yield call(sendData, 'submit answer', payload)
  }
}

function* teacherSubmitAnswerSaga(){
	while (true){
		const { payload } = yield take(`${teacherSubmitAnswer}`)
		yield call(sendData, 'teacher submit answer', payload)
		console.log("SAGA!!")
	}
}

function* joinTeacherSaga() {
  while (true) {
    const { payload } = yield take(`${joinTeacher}`)
    yield call(sendData, 'join teacher', payload)
  }
}



function* saga() {
  yield fork(fetchContentsSaga)
  yield fork(submitAnswerSaga)
  yield fork(teacherSubmitAnswerSaga)
  yield fork(joinTeacherSaga)
}

export default saga
