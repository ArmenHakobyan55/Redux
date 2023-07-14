import { useNavigate } from "react-router";
import { IPhoto } from "../../Types";


interface IPropCard {
    photos: IPhoto;

  }
  
  export const PhotosCard = (props: IPropCard) => {
    const { title, albumId, id, thumbnailUrl, url } = props.photos;
    const navigate = useNavigate();
  
    return (
      <div className="card-container" onClick={() => navigate(`${id}`)}>
        <img className="thumbnail-image" src={thumbnailUrl} alt={title} />
        <h2 className="title">{title}</h2>
        <p className="album-id">Album ID: {albumId}</p>
        <p className="url">URL: {url}</p>
        <p className="id">ID: {id}</p>
      </div>
    );
  };
  