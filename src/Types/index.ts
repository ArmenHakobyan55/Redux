export interface IPhoto{
    albumId: number ,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string

}

export interface IInitialPhotos {
    photosList: IPhoto[];
    photo: IPhoto | null;
  }