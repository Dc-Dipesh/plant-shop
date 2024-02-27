"use client"
import { HomeIcon, ShoppingCart, Sliders, Sprout } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className='sticky top-6 md:top-40 h-fit z-10 flex justify-center'>
      <div className='p-2 rounded-full flex  flex-row md:flex-col gap-5 bg-white/80 text-black/70 shadow-lg ring-1 ring-black/5 w-fit  '>
        <Link href='/' className={`p-1 ${pathname === "/" && "link_active"}`}>
          <span className='hidden'>Home</span>
          <HomeIcon size={24} />
        </Link>
        {/* shop */}
        <Link
          href='/shop'
          className={`p-1 ${pathname === "/shop" && "link_active"}`}>
          <span className='hidden'>Shop</span>
          <Sprout size={24} />
        </Link>
        {/* cart */}
        <Link
          href='/cart'
          className={`p-1 ${pathname === "/cart" && "link_active"}`}>
          <span className='hidden'>Cart</span>
          <ShoppingCart size={24} />
        </Link>
        {/* setting */}
        <Link
          href='/setting'
          className={`p-1 ${pathname === "/setting" && "link_active"}`}>
          <span className='hidden'>Setting</span>
          <Sliders size={24} />
        </Link>
      </div>
    </div>
  )
}
export default Sidebar
