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
    <html lang="en">
      <body className='font-body'>{children}</body>
    </html>
  )
}
