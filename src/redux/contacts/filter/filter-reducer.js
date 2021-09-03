import { filterContacts } from "./filter-actions";
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer( '', {
    [filterContacts]: (state, { payload }) => payload
});