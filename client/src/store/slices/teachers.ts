import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Params } from 'services/getUrlParams'
import { Teacher } from 'types/models'

interface TeachersState {
  teachers: Teacher[]
  loading: boolean
  error: string
}

const initialState: TeachersState = {
  teachers: [],
  loading: false,
  error: '',
}

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    fetchTeachers: (state, action: PayloadAction<Params>) => {
      state.loading = true
      state.error = ''
    },
    fetchTeachersFulfilled: (state, action: PayloadAction<Teacher[]>) => {
      state.loading = false
      state.teachers = action.payload
    },
    fetchTeachersRejected: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchTeachers, fetchTeachersFulfilled, fetchTeachersRejected } =
  teachersSlice.actions

export default teachersSlice.reducer
