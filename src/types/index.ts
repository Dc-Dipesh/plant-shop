export interface IPlants {
  _id?: string
  slug?: string
  name: string
  scientificName: string
  description: string
  price: number
  category: string
  image: string
  stock: number
  isFeatured: boolean
}

export interface ICart extends IPlants {
  quantity: number
}

export interface IUser {
  _id?: string
  name: string
  email: string
  password: string
  firstName: string
  lastName: string
  isAdmin: boolean
  token?: string
  shippingAddress: {
    address: string
    city: string
    postalCode: string
    country: string
  }
}
export interface ICategory {
  _id?: string
  name: string
  imageFile?: File
  image?: string
  slug?: string
  description: string
}

export interface IOrder {
  _id?: string
  userId: string
  orderItems: {
    plant: string
    quantity: number
    price: number
  }[]
  shippingAddress: {
    address: string
    city: string
    postalCode: string
    country: string
  }
  totalPrice: number
  status: string
  createdAt: Date
}
