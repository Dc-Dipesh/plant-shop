import CategoryCard from "@/components/CategoryCard"
import Headline from "@/components/Headline"
import PlantCard from "@/components/PlantCard"
import { IPlants } from "@/types"
import Image from "next/image"
import allPlants from "@/data.json"
import { useRandomSelection } from "@/components/helper"
export default function Home() {
  const FeaturedPlant = useRandomSelection(allPlants, 4)
  return (
    <>
      {/* hero section */}
      <div className='bg-white/80 text-black/70 shadow-lg ring-1 ring-black/5 h-full w-full rounded-xl pb-4'>
        <div className='relative aspect-square md:aspect-[12/5] '>
          <Image
            src='/images/hero1.jpg'
            fill
            sizes='100vw'
            alt='Buy plant'
            className='object-cover  rounded-xl '
          />
          <div className='w-full h-full'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 bg-white/50 rounded-lg p-3 w-3/4'>
              <h1 className='text-lg md:text-4xl font-bold text-black  text-center'>
                Grow your happiness with plants
              </h1>
              <p className='text-md md:text-2xl  text-black  text-center'>
                Bring nature and tranquility into your home. Explore our diverse
                collection of vibrant greenery
              </p>
            </div>
          </div>
        </div>

        {/* Featured plants */}
        <section>
          <Headline title='Featured Plants' view_all='/shop' />
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {FeaturedPlant?.map((plant, index) => (
              <PlantCard key={index} {...plant} />
            ))}
          </div>
        </section>
        {/* Category section */}
        <section>
          <Headline title='Categories' />
          <div className='mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 px-5'>
            {Categories?.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>
        {/* About us */}

        <section className='mt-10 '>
          <Headline title='Who we are' />
          <div className='container mx-auto mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
              <div className='flex items-center justify-center flex-col gap-4 order-2 md:order-1 px-2 '>
                <h2 className='mb-4 text-center font-bold text-black'>
                  More than just a plant shop, we&apos;re plant enthusiasts!
                </h2>
                <p
                  className='text-black'
                  style={{
                    textAlign: "justify",
                  }}>
                  We started Plant Shop out of a deep love for the beauty and
                  well-being that plants bring to our lives. We believe that
                  anyone can create a thriving indoor jungle, regardless of
                  experience level. We handpick each plant with care, ensuring
                  you receive healthy and vibrant greenery. Our mission is to
                  share our passion for plants and help you cultivate your own
                  personal oasis.{" "}
                </p>
              </div>
              <div className='order-1 md:order-2 relative h-full aspect-[3/2]'>
                <Image
                  fill
                  sizes='(max-width: 768px) 100vw, 50vh'
                  src={"/images/aboutus.jpg"}
                  alt='About Us'
                  className='object-cover rounded'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
const Categories: IPlants[] = [
  {
    image: "/images/category1.jpg",
    name: "Indoor Plants",
    alt: "Indoor plants",
    slug: "indoor-plants",
  },
  {
    image: "/images/category2.jpg",
    name: "Outdoor Plants",
    alt: "Outdoor plants",
    slug: "outdoor-plants",
  },
  {
    image: "/images/category3.jpg",
    name: "Office Plants",
    alt: "Office plants",
    slug: "office-plants",
  },
  {
    image: "/images/category4.jpg",
    name: "Flowering Plants",
    alt: "Flowering plants",
    slug: "flowering-plants",
  },
]
