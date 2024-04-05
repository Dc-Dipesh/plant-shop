import { Plant } from "@/server/schemas"
import { connectDb } from "@/server/db"
import { IPlants } from "@/types"

export async function savePlant(plant: IPlants) {
  try {
    await connectDb()
    plant.slug = plant.name.toLowerCase().split(" ").join("-")
    plant.slug = plant.name.toLowerCase().split(" ").join("-")
    const existingPlant = await Plant.findOne({ slug: plant.slug })
    if (existingPlant) {
      plant.slug = plant.slug + "-" + Math.random().toString(36).substring(2, 3)
      const newPlant = new Plant(plant)
      await newPlant.save()
      return console.log("Plant saved successfully")
    }
    console.log("Saving plant", plant)
    const newPlant = new Plant(plant)
    console.log(newPlant)
    await newPlant.save()
    console.log("Plant saved successfully")
    return
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
  }
}

export async function getPlants() {
  try {
    await connectDb()
    const plants = await Plant.find()
    return plants
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
  }
}
