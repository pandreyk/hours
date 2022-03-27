import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { connector } from 'services/connector'
import { getUrlParams, Params } from 'services/getUrlParams'
import { Schedule } from 'types/models'

export const fetchShedules = createAsyncThunk(
  'shedule/fetchData',
  async function (params: Params, { rejectWithValue }) {
    try {
      const response = await connector.get<Schedule>(
        `shedules?${getUrlParams(params)}`,
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

interface ScheduleState {
  shedule?: Schedule
  loading: boolean
  error: string
}

const initialState: ScheduleState = {
  shedule: undefined,
  loading: false,
  error: '',
}

const schduleSlice = createSlice({
  name: 'shedule',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchShedules.pending.type]: (state) => {
      state.loading = true
      state.error = ''
    },
    [fetchShedules.fulfilled.type]: (
      state,
      action: PayloadAction<Schedule>,
    ) => {
      state.loading = false
      state.shedule = action.payload
    },
    [fetchShedules.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

// export const { pepa } = teachersSlice.actions

export default schduleSlice.reducer
