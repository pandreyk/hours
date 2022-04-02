import { call, takeEvery, put, SagaReturnType } from 'redux-saga/effects'
import {
  fetchTeachersFulfilled,
  fetchTeachersRejected,
  fetchTeachers,
} from 'store/slices/teachers'
import { Params } from 'services/getUrlParams'
import { getTeachers } from 'services/teachers'

function* fetchTeachersSaga(args: { type: string; payload: Params }) {
  try {
    const result: SagaReturnType<typeof getTeachers> = yield call(
      getTeachers,
      args.payload,
    )

    if (result.data) {
      yield put(fetchTeachersFulfilled(result.data))
    }
  } catch (e) {
    console.log('error', e)

    yield put(fetchTeachersRejected('error'))
  }
}

export default function* teachersSaga() {
  yield takeEvery(fetchTeachers.type, fetchTeachersSaga)
}
