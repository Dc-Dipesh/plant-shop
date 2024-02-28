import PlantCard from "@/components/PlantCard"
import { useRandomSelection } from "@/components/helper"
import allPlants from "@/data.json"
import { IPlants } from "@/types"
import { Plus } from "lucide-react"
import { FC } from "react"
interface IPros {
  params: {
    slug: string
  }
}
const PlantDetails: FC<IPros> = ({ params }) => {
  console.log(params.slug)
  const plantDetails: IPlants = allPlants.find(
    (plant) => plant.slug === params.slug
  )!
  const Redemanded_products = useRandomSelection(
    allPlants.filter((PlantCard) => PlantCard.slug !== plantDetails.slug),
    2
  )

  return (
    <div>
      <div className='bg-white/50 text-black/70 shadow-lg ring-1 ring-black/5 h-full w-full rounded-xl p-3 relative'>
        <div className='grid md:grid-cols-4 gap-10 mb-10'>
          <div className='md:col-span-1 hidden md:block '>
            <div className='flex justify-center items-center h-full w-full '>
              <PlantCard
                alt={Redemanded_products[0]?.alt || "best plant"}
                image={Redemanded_products[0].image}
                name={Redemanded_products[0].name}
                slug={Redemanded_products[0].slug}
                price={Redemanded_products[0].price}
              />
            </div>
          </div>
          <div className='md:col-span-2'>
            <PlantCard
              alt={plantDetails?.alt || "best plant"}
              image={plantDetails.image}
              slug={plantDetails.slug}
            />
          </div>
          <div className='md:col-span-1 hidden md:block'>
            <div className='flex justify-center items-center h-full w-full'>
              <PlantCard
                alt={Redemanded_products[1]?.alt || "best plant"}
                image={Redemanded_products[1].image}
                name={Redemanded_products[1].name}
                slug={Redemanded_products[1].slug}
                price={Redemanded_products[1].price}
              />
            </div>
          </div>
        </div>
        <div className='absolute -bottom-12 w-full '>
          <div className='flex justify-center mt-5 w-full'>
            <div className='flex flex-row bg-white/50 text-black/70 shadow-lg ring-1 ring-black/5 p-5 rounded-full gap-10'>
              <div>
                <h1 className='font-medium text-white text-2xl  '>
                  {plantDetails.name}
                </h1>
                <p className='text-md md:text-2xl text-white'>
                  ${plantDetails.price}
                </p>
              </div>
              <button className='bg-white text-black p-2 px-4 rounded-full flex gap-1 justify-center items-center '>
                <Plus /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-10 mt-20 md:hidden bg-white/50 text-black/70 shadow-lg ring-1 ring-black/5 p-3  rounded-xl'>
        <div className='col-span-1'>
          <h1 className='text-2xl font-bold mb-5'>Recommended Products</h1>
        </div>
        <div className='col-span-1  '>
          <div className='flex justify-center items-center h-full w-full '>
            <PlantCard
              alt={Redemanded_products[0]?.alt || "best plant"}
              image={Redemanded_products[0].image}
              name={Redemanded_products[0].name}
              slug={Redemanded_products[0].slug}
              price={Redemanded_products[0].price}
            />
          </div>
        </div>
        <div className='md:col-span-1 '>
          <div className='flex justify-center items-center h-full w-full'>
            <PlantCard
              alt={Redemanded_products[1]?.alt || "best plant"}
              image={Redemanded_products[1].image}
              name={Redemanded_products[1].name}
              slug={Redemanded_products[1].slug}
              price={Redemanded_products[1].price}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PlantDetails
