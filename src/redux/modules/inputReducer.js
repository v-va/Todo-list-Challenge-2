const initailState = [
    {title: '', content: ''}
]

// action value
export const SET_TODO = "todo/SET_TODO";
export const RESET_INPUT = "todo/RESET_INPUT";

// action creator
export const setTodo = (payload) => {
    return {
        type: SET_TODO,
        payload,
    }
}

export const resetInput = () => {
    return {
        type: RESET_INPUT,
    }
}

const input = (state=initailState, action) => {
    switch (action.type){
        case SET_TODO:
            return {...state, [action.payload.name] : action.payload.value}
        case RESET_INPUT:
            return ''
        default:
            return state;
      }
}

export default input
