import { ICategory } from "@/types"
import {
  getAllCategory,
  saveCategory,
} from "../../../../_actionns/CategoryAction"
import Link from "next/link"
import { Plus } from "lucide-react"

export default async function Categories() {
  const category = await getAllCategory()
  return (
    <>
      {/* Create new category button*/}
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>
          Categories
        </h2>
        <Link
          href={"categories/new"}
          className='flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none'>
          <Plus size={16} />
          <span>Create New Category</span>
        </Link>
      </div>
      <section className='container px-4 mx-auto'>
        <div className='flex flex-col'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                  <thead className='bg-gray-50 dark:bg-gray-800'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <div className='flex items-center gap-x-3'>
                          <input
                            type='checkbox'
                            className='text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700'
                          />
                          <button className='flex items-center gap-x-2'>
                            <span>SN</span>
                          </button>
                        </div>
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        Category Name
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        Image
                      </th>

                      <th
                        scope='col'
                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        Description
                      </th>

                      <th scope='col' className='relative py-3.5 px-4'>
                        <span className='sr-only'>Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                    {category?.map((category: ICategory, index: number) => (
                      <tr key={index}>
                        <td className='px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap'>
                          <div className='inline-flex items-center gap-x-3'>
                            <input
                              type='checkbox'
                              className='text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700'
                            />

                            <span>{index + 1}</span>
                          </div>
                        </td>
                        <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                          {category.name}
                        </td>
                        <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                          <div className='inline-flex items-center px-3 py-1  gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800'>
                            <img
                              src={`http://localhost:3000/images/${category.image}`}
                              alt=''
                              className='w-52'
                            />
                          </div>
                        </td>
                        <td className='px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                          <div className='flex items-center gap-x-2'>
                            {category.description}
                          </div>
                        </td>

                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                          <div className='flex items-center gap-x-6'>
                            <button className='text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none'>
                              Archive
                            </button>

                            <button className='text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none'>
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='flex items-center justify-between mt-6'>
          <a
            href='#'
            className='flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5 rtl:-scale-x-100'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
              />
            </svg>

            <span>previous</span>
          </a>

          <div className='items-center hidden md:flex gap-x-3'>
            <a
              href='#'
              className='px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60'>
              1
            </a>
            <a
              href='#'
              className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
              2
            </a>
            <a
              href='#'
              className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
              3
            </a>
            <a
              href='#'
              className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
              ...
            </a>
            <a
              href='#'
              className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
              12
            </a>
            <a
              href='#'
              className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
              13
            </a>
            <a
              href='#'
              className='px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
              14
            </a>
          </div>

          <a
            href='#'
            className='flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800'>
            <span>Next</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5 rtl:-scale-x-100'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </a>
        </div> */}
      </section>
    </>
  )
}
