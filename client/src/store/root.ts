import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas/rootSaga'
import classesSlice from './slices/classes'
import teachersSlice from './slices/teachers'

const rootReducer = combineReducers({
  teachersSlice,
  classesSlice,
})

const sagaMiddleware = createSagaMiddleware()

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({ thunk: false }),
      sagaMiddleware,
    ],
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })

  sagaMiddleware.run(saga)

  return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
