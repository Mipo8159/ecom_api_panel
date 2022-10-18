import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {categoryApi} from './category/category.api'
import {fileApi} from './file/file.api'
import {productApi} from './product/product.api'

const rootReducer = combineReducers({
  [fileApi.reducerPath]: fileApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(fileApi.middleware)
      .concat(productApi.middleware)
      .concat(categoryApi.middleware),
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store['dispatch']
