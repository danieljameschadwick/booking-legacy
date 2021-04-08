import { createTransform } from "redux-persist";

const BookingTransform = createTransform(
    // transform state on its way to being serialized and persisted.
    (inboundState, key) => {
        return inboundState;
    },
    // transform state being rehydrated
    (outboundState, key) => {
        return {
            ...outboundState
        };
    },
);

export default BookingTransform;
