import Link from "next/link"
import { FC } from "react"
interface IProps {
  title: string
  view_all?: string
}
const Headline: FC<IProps> = ({ title, view_all }) => {
  return (
    <>
      <div className='flex justify-between px-4 mt-20'>
        <h1 className='font-bold text-2xl text-black '>{title}</h1>

        {view_all && (
          <Link href={view_all} className='underline'>
            View All{" "}
          </Link>
        )}
      </div>
    </>
  )
}
export default Headline
