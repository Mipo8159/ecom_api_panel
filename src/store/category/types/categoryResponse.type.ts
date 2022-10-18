import {CategoryType} from '../../../types/category.type'

export type CategoryResponse = {
  categories: {
    categories: CategoryType[]
    meta: {
      page: number
      lastPage: number
      count: number
    }
  }
}
