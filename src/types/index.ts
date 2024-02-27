export interface IPlants {
  image: string
  name: string
  price?: number
  alt: string
  slug: string
}

export interface ICart extends IPlants {
  quantity: number
}
