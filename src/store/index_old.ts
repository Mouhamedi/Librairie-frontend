import { ADHERENT_ACTIONS } from "@/utils/_constants"
import { createStore} from "redux"
import { Adherent } from "type"

export type adherentState = {
    adherentList: Adherent[]
}


const initialState: adherentState = {
    adherentList :[]
}

type actionType = {
    type : string,
    payload : any
}

const adherentReducer = (
    state: adherentState = initialState,
    action:actionType
    ) => {
        switch (action.type){
            case ADHERENT_ACTIONS.ADD:
                return{
                    adherentList: [...state.adherentList, action.payload]
                }
                break;
                case ADHERENT_ACTIONS.SET :
                    return{
                        adherentList: [...action?.payload]
                    }

                    default:
                        return state
                            break;
        }
            
    };
    export const store = createStore(adherentReducer)