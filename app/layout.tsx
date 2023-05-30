
import ThemeModifier from '@/components/Theme'
import ContentProvider, { useStateContext } from '@/context/Provider'
import '@/styles/globals.css'


 export const metadata = {
  title: 'my first website with Nextjs',
  description: 'Phletoras Home of Movies',
  
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }:Props) {

  return (
    
      <html lang="en">:
      <ContentProvider> 
        <body className="font-body dark:bg-main-dark-bg">
          {children}
        </body>
      </ContentProvider>
      </html>
    
  );
}
