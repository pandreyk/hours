import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { connector } from 'services/connector'
import { getUrlParams, Params } from 'services/getUrlParams'
import { Teacher } from 'types/models'

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchData',
  async function (params: Params, { rejectWithValue }) {
    try {
      const response = await connector.get<Teacher[]>(
        `teachers?${getUrlParams(params)}`,
      )

      if (!response.ok) {
        throw new Error()
      }

      return response.data
    } catch (error) {
      return rejectWithValue('server error')
    }
  },
)

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
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending.type]: (state) => {
      state.loading = true
      state.error = ''
    },
    [fetchTeachers.fulfilled.type]: (
      state,
      action: PayloadAction<Teacher[]>,
    ) => {
      state.loading = false
      state.teachers = action.payload
    },
    [fetchTeachers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

// export const { pepa } = teachersSlice.actions

export default teachersSlice.reducer
