import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { connector } from 'services/connector'
import { getUrlParams, Params } from 'services/getUrlParams'
import { Class } from 'types/models'

export const fetchClasses = createAsyncThunk(
  'classes/fetchData',
  async function (params: Params, { rejectWithValue }) {
    try {
      const response = await connector.get<Class[]>(
        `classes?${getUrlParams(params)}`,
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
  reducers: {},
  extraReducers: {
    [fetchClasses.pending.type]: (state) => {
      state.loading = true
      state.error = ''
    },
    [fetchClasses.fulfilled.type]: (state, action: PayloadAction<Class[]>) => {
      state.loading = false
      state.classes = action.payload
    },
    [fetchClasses.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

// export const { pepa } = teachersSlice.actions

export default classesSlice.reducer
