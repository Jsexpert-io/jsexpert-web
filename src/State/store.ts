import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user.feature'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { apiSlice } from './api.slice'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist'
import projectReducer from './features/project.feature'

const persistConfig = {
  key: 'root',
  storage,


}
const reducers = combineReducers({
    userState: userReducer,
    projectState :projectReducer
           
});
const persistedUserReducer = persistReducer(persistConfig, userReducer)
const persistedProjectReducer = persistReducer(persistConfig, projectReducer)


export const store = configureStore({
  devTools:process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    userState: persistedUserReducer,
    projectState :persistedProjectReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector