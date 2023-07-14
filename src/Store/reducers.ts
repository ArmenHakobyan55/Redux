import { combineReducers } from "@reduxjs/toolkit";
import { photosSlice } from "./Photos";

export const reducers = () =>
  combineReducers({
    photos: photosSlice.reducer
   
  });