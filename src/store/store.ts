import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {fileApi} from './file/file.api'

const rootReducer = combineReducers({
  [fileApi.reducerPath]: fileApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fileApi.middleware),
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store['dispatch']
