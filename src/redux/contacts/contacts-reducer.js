import { combineReducers } from "redux";
import { itemsReducer, errorReducer } from "./items/items-reducer";
import { filterReducer } from "./filter/filter-reducer";

export const contactsReducer = combineReducers({
    items: itemsReducer,
    error: errorReducer,
    filter: filterReducer
});