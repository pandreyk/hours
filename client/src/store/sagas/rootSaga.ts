import { call, all, spawn } from 'redux-saga/effects'
import classesSaga from './classes'
import teachersSaga from './teachers'

export default function* rootSaga() {
  const sagas = [teachersSaga, classesSaga]

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      }),
    ),
  )
}
