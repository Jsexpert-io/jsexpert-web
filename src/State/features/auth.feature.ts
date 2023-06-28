import { store } from "../store"
import { resetFilter } from "./api.matrices.feature"
import { clearProject } from "./project.feature"
import { removeUser } from "./user.feature"

export const logout =()=>{
    store.dispatch(removeUser())
    store.dispatch(clearProject())
    store.dispatch(resetFilter())
}