import {Dispatch} from "redux"
import Api from "../api"
import {InferActionsTypes, TextItem, TextStateType } from "../types";

let initialState = {
    texts: [],
};
const textReducer = (state = initialState, action: ActionsTypes): TextStateType => {
    switch (action.type) {
        case 'SET-TEXT-ITEMS':
            return {
                ...state,
                texts: [
                    ...state.texts,
                    action.textItem
                ]
            }
        case 'RESET-TEXT-ITEMS':
            return {
                ...state,
                texts: []
            }
        default:
            return state
    }

}

export const actions = {
    setTextItem: (textItem: TextItem) => ({type: 'SET-TEXT-ITEMS', textItem} as const),
    resetTextItems: () => ({type: 'RESET-TEXT-ITEMS'} as const)
}

export const getTextItem = (id: number) => async (dispatch: Dispatch) => {
    const {text} = await Api.getTextItem(id) // get information from server
    let words = text.split(' ').filter((item: string) => item && item !== '-').length //count words without '-' numbers like 24 will count like a world
    let vowels = text.replace(/[^aeiouäöüауоыиэяюёеyæøåéóáíàò]/ugi, '').length // count vowels
    const textItem: TextItem = {
        id,
        text,
        words,
        vowels
    }
    dispatch(actions.setTextItem(textItem))
}

export const resetTextItems = () => async (dispatch: Dispatch) => {
    dispatch(actions.resetTextItems())
}

type ActionsTypes = InferActionsTypes<typeof actions>

export default textReducer
