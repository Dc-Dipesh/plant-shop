import mongoose from "mongoose"

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING!)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}
const disconnectDb = async () => {
  try {
    await mongoose.disconnect()
    console.log("MongoDB disconnected")
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export { connectDb, disconnectDb }
