import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {fileApi} from './file/file.api'
import {productApi} from './product/product.api'

const rootReducer = combineReducers({
  [fileApi.reducerPath]: fileApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fileApi.middleware).concat(productApi.middleware),
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store['dispatch']
