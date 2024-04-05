import { connectDb } from "@/server/db"
import { Category } from "@/server/schemas"
import { ICategory } from "@/types"

const getAllCategory = async () => {
  try {
    await connectDb()
    const categories = await Category.find()
    return categories
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
  }
}
// cerate a new category
const saveCategory = async (category: ICategory) => {
  // add a slug to the category
  category.slug = category.name.toLowerCase().split(" ").join("-")
  try {
    await connectDb()
    // check if the category already exists
    const existingCategory = await Category.findOne({ slug: category.slug })
    if (existingCategory) {
      category.slug =
        category.slug + "-" + Math.random().toString(36).substring(2, 3)
    }
    const newCategory = new Category(category)
    await newCategory.save()
    return console.log("Category saved successfully")
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
  }
}
export { getAllCategory, saveCategory }
