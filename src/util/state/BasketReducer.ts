import { REHYDRATE } from "redux-persist";
import { ACTION } from "./Action";

const initialState = {};

export const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            // @TODO: persist basket state between pages

            return {
                ...state,
            };

        case ACTION.BOOK:
            // @TODO: persist booking

            return {
                ...state,
            };
    }

    return state;
};
