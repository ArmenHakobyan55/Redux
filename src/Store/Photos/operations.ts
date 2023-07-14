import { AppDispatch } from "..";
import { photosSlice } from "./photosSlice";

const getPhotos = () => {
    return async (dispatch: AppDispatch) => {
      const { setPhotos } = photosSlice.actions;
  
      try {
        const comments = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
  
        dispatch(setPhotos(await comments.json()));
      } catch (error) {
        console.log(error);
      }
    };
  };
  

  const getPhotoById = (id: number) => {
    return async (dispatch: AppDispatch) => {
      const { setPhoto } = photosSlice.actions;
  
      try {
        const comment = await fetch(
          `https://jsonplaceholder.typicode.com/comments/${id}`
        );
  
        dispatch(setPhoto(await comment.json()));
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const photosOp = { getPhotos,getPhotoById}