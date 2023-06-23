import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist'
interface Project {
    _id: string,
    name: string,
    description: string,
    clientId: string,
    clientSecret: string,
    id: string,
}
const initialState: {
    project: Project | null,

} = {
    project: null
}
const projectFeature = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProject(state, action) {
            state.project = action.payload;
        },
        clearProject(state) {
            state.project = null;
        }
    }
})

export const { setProject, clearProject } = projectFeature.actions;
const persistConfigProject = {
    key: 'root-project',
    storage,
}


const persistedProjectReducer = persistReducer(persistConfigProject, projectFeature.reducer)
export default persistedProjectReducer;