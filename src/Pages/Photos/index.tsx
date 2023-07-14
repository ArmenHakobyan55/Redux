import { Link } from "react-router-dom"
import { MainLayout } from "../../MainLayout/Layout"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store";
import { photosOp, photosSel } from "../../Store/Photos";
import { useEffect} from "react";
import { PhotosCard } from "../../Components/PhotosCard";
import Styles from "./Photos.module.css"

export const Photos = () => {
  const dispatch = useDispatch<AppDispatch>();
  const photos = useSelector(photosSel.photosListSelector);
  
  useEffect(() => {
    dispatch(photosOp.getPhotos());
  }, [dispatch]);

  return (
    <MainLayout>
      <div className={Styles.container} >

       {photos.map((photos) => (
         <PhotosCard photos={photos} key={photos.id}/>
         ))}
         </div>
        <br/>
    <Link to={"/"} > Back </Link>
    </MainLayout>
  )
}
