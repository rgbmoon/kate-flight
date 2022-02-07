export interface WallResponse {
  response: Response;
}
export interface Response {
  count: number;
  items?: (ItemsEntity)[] | null;
}
export interface ItemsEntity {
  id: number;
  from_id: number;
  owner_id: number;
  date: number;
  marked_as_ads: number;
  post_type: string;
  text: string;
  attachments?: (AttachmentsEntity)[] | null;
  comments: CommentsOrRepostsOrViews;
  likes: Likes;
  reposts: CommentsOrRepostsOrViews;
  views: CommentsOrRepostsOrViews;
  donut: Donut;
  short_text_rate: number;
  carousel_offset: number;
  hash: string;
}
export interface AttachmentsEntity {
  type: string;
  photo: Photo;
}
export interface Photo {
  album_id: number;
  date: number;
  id: number;
  owner_id: number;
  access_key: string;
  sizes?: (SizesEntity)[] | null;
  text: string;
  has_tags: boolean;
  user_id?: number | null;
}
export interface SizesEntity {
  height: number;
  url: string;
  type: string;
  width: number;
}
export interface CommentsOrRepostsOrViews {
  count: number;
}
export interface Likes {
  can_like: number;
  count: number;
  user_likes: number;
}
export interface Donut {
  is_donut: boolean;
}
