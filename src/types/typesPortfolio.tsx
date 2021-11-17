export interface Item {
  album_id: number;
  date: number;
  id: number;
  owner_id: number;
  sizes: Size[];
  text: string;
  user_id: number;
}
export interface Size {
  height: number;
  url: string;
  type: string;
  width: number;
}