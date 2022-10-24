export type AddProductRequest = {
  product: {
    readonly title: string
    readonly body: string
    readonly description: string
    readonly price: string
    readonly rating: string
    readonly gallery: string[]
    readonly categories: string[]
  }
}
