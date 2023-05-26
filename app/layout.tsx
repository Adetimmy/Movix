import '@/styles/globals.css'


export const metadata = {
  title: 'my first website with Nextjs',
  description: 'Phletoras Home of Movies',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className='font-body dark:bg-main-dark-bg'>{children}</body>
    </html>
  )
}
