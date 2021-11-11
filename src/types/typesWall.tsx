export interface IWall {
  response: Response
}

export interface Response {
  count: number
  items: Item[]
}

export interface Item {
  id: number
  from_id: number
  owner_id: number
  date: number
  marked_as_ads: number
  post_type: string
  text: string
  attachments: Attachment[]
  comments: Comments
  likes: Likes
  reposts: Reposts
  views: Views
  donut: Donut
  short_text_rate: number
  hash: string
}

export interface Attachment {
  type: string
  photo: Photo
}

export interface Photo {
  album_id: number
  date: number
  id: number
  owner_id: number
  has_tags: boolean
  access_key: string
  sizes: Size[]
  text: string
}

export interface Size {
  height: number
  url: string
  type: string
  width: number
}

export interface Comments {
  count: number
}

export interface Likes {
  can_like: number
  count: number
  user_likes: number
}

export interface Reposts {
  count: number
}

export interface Views {
  count: number
}

export interface Donut {
  is_donut: boolean
}
