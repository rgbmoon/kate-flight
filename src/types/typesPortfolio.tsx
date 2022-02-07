export interface AlbumResponse {
  response: Response;
}
export interface Response {
  count: number;
  items?: (ItemsEntity)[] | null;
}
export interface ItemsEntity {
  album_id: number;
  date: number;
  id: number;
  owner_id: number;
  sizes?: (SizesEntity)[] | null;
  text: string;
  user_id: number;
  has_tags: boolean;
}
export interface SizesEntity {
  height: number;
  url: string;
  type: string;
  width: number;
}
