import "../globals.css"
import Sidebar from "./components/Sidebar"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col justify-center md:flex-row gap-10 p-2 px-4 md:p-5 relative bg-green-300'>
          <Sidebar />
          <div className='w-full pt-5 px-4 mb-8 mx-auto '>
            <div className='text-sm text-gray-700 py-1'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
