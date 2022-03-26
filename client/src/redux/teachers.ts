import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getTeachers } from 'services/teachers'
import { Params } from 'services/types'
import { Teacher } from 'types/models'

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchData',
  async function (params: Params, { rejectWithValue }) {
    try {
      const response = await getTeachers(params)

      if (!response.ok) {
        throw new Error('server error')
      }

      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

interface TeachersState {
  teachers: Teacher[]
  loading: boolean
  error: { message: string }
}

const initialState: TeachersState = {
  teachers: [],
  loading: false,
  error: { message: '' },
}

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending.type]: (state) => {
      state.loading = true
      state.error = { message: '' }
    },
    [fetchTeachers.fulfilled.type]: (
      state,
      action: PayloadAction<Teacher[]>,
    ) => {
      state.loading = false
      state.teachers = action.payload
    },
    [fetchTeachers.rejected.type]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

// export const { pepa } = teachersSlice.actions

export default teachersSlice.reducer
