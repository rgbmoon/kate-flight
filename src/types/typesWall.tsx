export interface Item {
  id: number
  from_id: number
  owner_id: number
  date: number
  text: string
  attachments: Attachment[]
}
export interface Attachment {
  type: string
  photo: Photo
  sizes: Size[]
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