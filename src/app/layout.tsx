import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import { ThemeProvider } from "next-themes"

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
      <body className={inter.className}>
        <div className='flex flex-col justify-center md:flex-row gap-10 p-2 md:p-5 relative bg-green-500'>
          <Sidebar />
          <div className='backdrop-blur-lg !min-h-[95vh] h-full w-full'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
