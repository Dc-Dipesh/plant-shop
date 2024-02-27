"use client"
import Link from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { FC } from "react"

export const Pagination: FC<{ TotalPage: number }> = ({ TotalPage }) => {
  const router = useRouter()
  const pathname = usePathname()
  //   Taken all url search parameters and put it in URLSearchParams to change desire params and leave other as it is in this case page number
  const SearchParams = useSearchParams()
  const Page = SearchParams.get("page") || "1"

  // Create a new URLSearchParams instance to easily manipulate the search parameters
  let newSearchParams = new URLSearchParams(SearchParams.toString())

  return (
    TotalPage > 1 && (
      <div className='max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white p-3 rounded-lg shadow-sm'>
        <div className='flex justify-center'>
          <nav className='flex space-x-2' aria-label='Pagination'>
            {parseInt(Page) <= 1 ? (
              ""
            ) : (
              <button
                className='relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'
                onClick={() => {
                  newSearchParams.set("page", `${parseInt(Page) - 1}`)
                  router.push(`${pathname}/?${newSearchParams.toString()}`)
                }}
                disabled={parseInt(Page) <= 1}>
                «
              </button>
            )}

            {Array?.from(Array(TotalPage)?.keys())?.map((item, index) => {
              newSearchParams.set("page", `${item + 1}`)
              return (
                <Link
                  href={`${pathname}/?${newSearchParams.toString()}`}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 ${
                    Page === (item + 1).toString() && "bg-fuchsia-200"
                  }`}
                  key={index}>
                  {item + 1}
                </Link>
              )
            })}
            {parseInt(Page) === TotalPage ? (
              ""
            ) : (
              <button
                className='relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'
                onClick={() => {
                  newSearchParams.set("page", `${parseInt(Page) + 1}`)
                  router.push(`${pathname}/?${newSearchParams.toString()}`)
                }}
                disabled={parseInt(Page) === TotalPage}>
                »
              </button>
            )}
          </nav>
        </div>
      </div>
    )
  )
}
