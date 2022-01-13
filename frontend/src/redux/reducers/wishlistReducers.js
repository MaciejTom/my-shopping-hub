import * as actionTypes from "../constants/wishlistConstans";

const WISHLIST_INITIAL_STATE = {
  wishlistItems: [],
};

export const wishlistReducer = (state = WISHLIST_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      const item = action.payload;

      const existItem = state.wishlistItems.find(
        (x) => x.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          wishlistItems: state.wishlistItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (x) => x.product !== action.payload
        ),
      };

    default:
      return state;
  }
};

