const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const increment = () => ({
    type: INCREMENT_COUNT
})

export const decrement = () => ({
    type: DECREMENT_COUNT
})

const initialState = {
    count: 0
}

export default (state=initialState, action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            return { ...state, count: state.count + 1 };
        case DECREMENT_COUNT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

