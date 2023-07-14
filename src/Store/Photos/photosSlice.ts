import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialPhotos } from "./initialState";
import { IInitialPhotos, IPhoto } from "../../Types";

export const photosSlice = createSlice({
    name: 'photos',
    initialState: initialPhotos,
    reducers: {
        setPhotos(state:IInitialPhotos, action: PayloadAction<IPhoto[]>){
            state.photosList = action.payload
     },
        setPhoto(state:IInitialPhotos, action: PayloadAction<IPhoto>){
        state.photo = action.payload
    },
 }
})