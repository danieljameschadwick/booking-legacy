import { REHYDRATE } from "redux-persist";
import { ACTION } from "./Action";

const initialState = {};

export const BookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE:
            // @TODO: persist basket state between pages? (if object is complex, unneeded currently)
            const booking = action.payload?.booking;

            if (undefined === booking) {
                return {
                    ...state,
                    booking: {},
                }
            }

            return {
                ...booking
            };

        case ACTION.BOOK:
            // @TODO: persist booking, will need to communicate with server at some point
            const { firstName, lastName, dateTime } = action.payload;

            return {
                firstName,
                lastName,
                dateTime,
            };
    }

    return state;
};
