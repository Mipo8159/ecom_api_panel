import {FileType} from './file.type'
import {ProductType} from './product.type'

export type CategoryType = {
  _id: string
  title: string
  body: string
  image: FileType
  products: ProductType[]
  createdAt: string
  updatedAt: string
}
