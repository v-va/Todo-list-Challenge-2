const initailState = [
    {id: "1", title: 'TodoList 챌린지!', content: 'TodoList 오후 6시 까지 만들기!!', isDone: false},
    {id: "2", title: 'Lv3 과제하기', content: '내일까지 Lv3 과제 제출하기!!', isDone: true},
]

// action value
export const ADD_TODO = "todo/ADD_TODO";
export const DEL_TODO = "todo/DEL_TODO";
export const TOGGLE_TODO = "todo/TOGGLE_TODO";

// action creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    }
}

export const delTodo = (payload) => {
    return {
        type: DEL_TODO,
        payload,
    }
}

export const toggleTodo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload,
    }
}


const todolist = (state=initailState, action) => {
  switch (action.type){
    case ADD_TODO:
        return [...state, action.payload]
    case DEL_TODO:
        return state.filter((todo) => {
            return todo.id !== action.payload
        })
    case TOGGLE_TODO:
        return state.map((todo) => {
            if(todo.id === action.payload){
                return {...todo, isDone: !todo.isDone}
            }
            return todo
        })
    default:
        return state;
  }
}

export default todolist
