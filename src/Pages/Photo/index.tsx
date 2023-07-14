import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { AppDispatch } from "../../Store";
import { photosOp, photosSel,  } from "../../Store/Photos";
import { useEffect } from "react";


export const Photo = () => {
    const {id} = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const photo = useSelector(photosSel.photoListSelector)

    useEffect(() => {
        if (id) {
          dispatch(photosOp.getPhotoById(+id));
        }
      }, [dispatch, id]);

return (
    <>
      {photo ? (
        <div>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <h2>{photo.title}</h2>
          <p>Album ID: {photo.albumId}</p>
          <p>URL: {photo.url}</p>
          <p>ID: {id}</p>
        </div>
      ) : (
        <h1>Post not found</h1>
      )}
    </>
  );
}
