import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Params } from 'services/getUrlParams'
import { Class } from 'types/models'

type ClassesState = {
  classes: Class[]
  loading: boolean
  error: string
}

const initialState: ClassesState = {
  classes: [],
  loading: false,
  error: '',
}

const classesSlice = createSlice({
  name: 'classses',
  initialState,
  reducers: {
    fetchClasses: (state, action: PayloadAction<Params>) => {
      state.loading = true
      state.error = ''
    },
    fetchClassesFulfilled: (state, action: PayloadAction<Class[]>) => {
      state.loading = false
      state.classes = action.payload
    },
    fetchClassesRejected: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchClasses, fetchClassesFulfilled, fetchClassesRejected } =
  classesSlice.actions

export default classesSlice.reducer
