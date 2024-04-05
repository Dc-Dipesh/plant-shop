import { ICategory, IOrder, IPlants, IUser } from "@/types"
import { Schema, model, models } from "mongoose"

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
})
const plantSchema = new Schema<IPlants>(
  {
    name: {
      type: String,
      required: true,
    },
    scientificName: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    isFeatured: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    shippingAddress: {
      city: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
      address: {
        type: String,
        required: false,
      },
      postalCode: {
        type: String,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
)
const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderItems: [
    {
      plant: {
        type: Schema.Types.ObjectId,
        ref: "Plant",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  shippingAddress: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    // type can be pending, processing, shipped, delivered, or cancelled
    type: String,
    required: true,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})
const Category = models.Category || model("Category", CategorySchema) // Category is the name of the collection in the database
const Plant = models.Plant || model("Plant", plantSchema) // Plant is the name of the collection in the database
const User = models.User || model("User", userSchema)
const Order = models.Order || model("Order", OrderSchema)
export { Plant, User, Category, Order }
