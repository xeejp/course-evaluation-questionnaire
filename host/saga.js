import { put, take, call, select, fork } from 'redux-saga/effects'

import { fetchContents, changePage, updateText } from './actions'

function* changePageSaga() {
  while (true) {
    const { payload } = yield take(`${changePage}`)
	  console.log("saga")
    yield call(sendData, 'change page', payload)
  }
}

function* saga() {
  yield fork(changePageSaga)
}
export default saga
