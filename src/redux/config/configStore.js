import { combineReducers, createStore } from "redux";
import todolist from "../modules/todoReducer"
import input from "../modules/inputReducer"

const rootReducer = combineReducers({
    todolist,
    input
})

const store = createStore(rootReducer);

export default store