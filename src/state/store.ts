import reducers from './reducers/index'
import { createAsyncThunk, configureStore } from '@reduxjs/toolkit'

const asyncAction = createAsyncThunk(
  'someAsyncAction',
  async (arg: any, thunkAPI) => {
    const data = await fetch(arg).then(res => res.json())
    return data
  }
)
const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export { store, asyncAction }
