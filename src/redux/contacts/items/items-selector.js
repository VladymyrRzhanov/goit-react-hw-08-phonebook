import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from "../filter/filter-selector";

export const getItems = state => state.contacts.items;

export const getFilterName = createSelector(
  [getItems, getFilter],
  (items, filter) => {
  const normalizedContact = filter.toLowerCase();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedContact),
  );
})