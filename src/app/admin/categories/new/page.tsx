import Form from "./components/Form"

export default async function NewCategory() {
  return (
    <>
      <div className='bg-white/80 py-4'>
        <h1 className='text-4xl font-semibold text-[#07074D] text-center '>
          {" "}
          New Category{" "}
        </h1>
      </div>

      <div className='flex items-center justify-center'>
        <div className='mx-auto w-full  bg-white/80'>
          <Form />
        </div>
      </div>
    </>
  )
}
