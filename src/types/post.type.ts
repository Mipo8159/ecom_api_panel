import {FileType} from './file.type'

export type PostType = {
  _id: string
  title: string
  body: string
  description: string
  images: FileType[]
  createdAt: string
  updatedAt: string
}
