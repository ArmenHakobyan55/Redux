import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IInitialPhotos } from "../../Types";

// const photosSelector = (state: RootState) => state.photos;
const photosSelector = (state: RootState) => state.photos;

const photosListSelector = createSelector(
      [photosSelector],
      (photos: IInitialPhotos) => photos.photosList
)
const photoListSelector = createSelector(
    [photosSelector],
    (photos: IInitialPhotos) => photos.photo
)

export const photosSel = {
    photosSelector,
    photosListSelector,
    photoListSelector
}