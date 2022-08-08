import { Action } from "../actions";
import { ActionType } from "../types";

const initialState = 0;

const reducer = (state: number = initialState, action: Action): number => {
    switch(action.type){
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;   
        default:
            return state         
    }
}

export default reducer