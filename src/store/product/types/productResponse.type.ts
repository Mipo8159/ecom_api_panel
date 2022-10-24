import {ProductType} from '../../../types/product.type'

export type ProductResponse = {
  products: ProductType[]
  meta: {
    page: number
    count: number
    lastPage: number
  }
}
