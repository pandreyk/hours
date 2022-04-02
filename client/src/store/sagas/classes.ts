import { call, takeEvery, put, SagaReturnType } from 'redux-saga/effects'
import {
  fetchClasses,
  fetchClassesFulfilled,
  fetchClassesRejected,
} from 'store/slices/classes'
import { getClasses } from 'services/classes'
import { Params } from 'services/getUrlParams'

function* fetchClassesSaga(args: { type: string; payload: Params }) {
  try {
    const result: SagaReturnType<typeof getClasses> = yield call(
      getClasses,
      args.payload,
    )

    if (result.data) {
      yield put(fetchClassesFulfilled(result.data))
    }
  } catch (e) {
    console.log('error', e)

    yield put(fetchClassesRejected('error'))
  }
}

export default function* teachersSaga() {
  yield takeEvery(fetchClasses.type, fetchClassesSaga)
}
