import { createSlice } from "@reduxjs/toolkit";

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
export default projectFeature.reducer;