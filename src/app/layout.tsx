import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import { CartProvider } from "@/components/CartContext"
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Plant shop",
  description: "A plant shop to decorate your home with beautiful plants",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <CartProvider>
        <body className={inter.className}>
          <div className='flex flex-col justify-center md:flex-row gap-10 p-2 px-4 md:p-5 relative bg-green-300'>
            <Sidebar />
            <div className='backdrop-blur-lg !min-h-[95vh] h-full w-full md:w-[calc(100%-100px)]'>
              {children}
            </div>
          </div>
        </body>
      </CartProvider>
    </html>
  )
}
