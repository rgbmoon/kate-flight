export interface Size {
  height: number;
  url: string;
  type: string;
  width: number;
}

export interface Item {
  album_id: number;
  date: number;
  id: number;
  owner_id: number;
  has_tags: boolean;
  sizes: Size[];
  text: string;
  user_id: number;
}

export interface Response {
  count: number;
  items: Item[];
}

export interface RootObject {
  response: Response;
}



