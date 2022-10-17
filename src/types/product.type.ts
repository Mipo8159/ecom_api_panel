import {CategoryType} from './category.type'
import {FileType} from './file.type'

export type ProductType = {
  _id: string
  title: string
  brand: string
  body: string
  description: string
  stock: number
  price: number
  rating: number
  gallery: FileType[]
  categories: CategoryType[]
  createdAt: string
  updatedAt: string
}
