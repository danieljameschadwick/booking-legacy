export const ACTION = {
    ADD_TO_CART: 'basket.product.add',
    UPDATE_DELIVERY: 'basket.delivery.update',
};

export const addArticle = (payload) => {
    return { type: ACTION.ADD_TO_CART, payload }
};
