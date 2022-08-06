import { BUY_EGG } from "./eggTypes"

export function buyEgg(number=1){
    return {
        type: BUY_EGG,
        payload: number
    }
}