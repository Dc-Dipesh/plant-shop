"use client"
import { ICategory } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChangeEvent, useState } from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { z } from "zod"
interface ImageFile {
  name: string
  type: string
  size: number
}
const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICategory>({
    resolver: zodResolver(categorySchema),
  })
  const [imageFile, setImageFile] = useState<ImageFile | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0] // Use `!` for non-null assertion
    setImageFile(file)

    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => setImageUrl((e.target as any).result) // Type casting
  }

  // ...rest of the form components

  return (
    <>
      <form
        className='py-6 px-9'
        action='https://formbold.com/s/FORM_ID'
        method='POST'>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-[#07074D]'>
            Category Name
          </label>
          <input
            type='text'
            {...register("name")}
            placeholder='indoor plant'
            className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
          />
          {errors.name && (
            <span className='text-red-500'>
              {errors.name.message?.toString()}
            </span>
          )}
        </div>
        {/* description */}
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-[#07074D]'>
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder='indoor plant'
            className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
          />
          {errors.description && (
            <span className='text-red-500'>
              {errors.description.message?.toString()}
            </span>
          )}
        </div>

        <div className='mb-6 pt-4'>
          <label className='mb-5 block text-xl font-semibold text-[#07074D]'>
            Image
          </label>

          <div className='mb-8'>
            <input
              type='file'
              name='file'
              id='file'
              className='sr-only'
              onChange={handleImageChange}
            />
            {
              // Image preview
              imageUrl && (
                <img
                  src={imageUrl}
                  alt='image preview'
                  className='w-40 h-40 object-cover rounded-md'
                />
              )
            }
            <label
              htmlFor='file'
              className='relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center'>
              <div>
                <span className='mb-2 block text-xl font-semibold text-[#07074D]'>
                  Drop files here
                </span>
                <span className='mb-2 block text-base font-medium text-[#6B7280]'>
                  Or
                </span>
                <span className='inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]'>
                  Browse
                </span>
              </div>
            </label>
          </div>
        </div>

        <div>
          <button className='hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none'>
            Save
          </button>
        </div>
      </form>
    </>
  )
}
export default Form

const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  description: z.string().min(1, "Category description is required"),
  imageFile: z.instanceof(File).refine((file) => file.size < 5000000, {
    message: "Image size should be less than 5MB",
  }),
})
