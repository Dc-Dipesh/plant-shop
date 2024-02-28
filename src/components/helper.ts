import { IPlants } from "@/types"

export function useRandomSelection(array: IPlants[], number: number) {
  // Shuffle the array and return the first 4 elements directly
  return [...array].sort(() => 0.5 - Math.random()).slice(0, number)
}
