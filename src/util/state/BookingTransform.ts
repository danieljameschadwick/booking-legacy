import { createTransform } from "redux-persist";

/**
 * @TODO: file currently does nothing, however as the Booking object 
 *        grows, this will be required to rehydrate more complex structures.
 *        It is also nice to add console.log() to track state.
 */
const BookingTransform = createTransform(
    // transform state on its way to being serialized and persisted.
    (inboundState, key) => {
        return {
            ...inboundState
        };
    },
    // transform state being rehydrated
    (outboundState, key) => {
        return {
            ...outboundState
        };
    },
);

export default BookingTransform;
