'use client'
import ThemeModifier from '@/components/Theme'
import ContentProvider, { useStateContext } from '@/context/Provider'
import '@/styles/globals.css'


const metadata = {
  title: 'Movix',
  description: 'Phletoras Home of Movies',
  
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }:Props) {
 
  return (
   
    <ContentProvider>
      <ThemeContainer>
        {children}
      </ThemeContainer>
    </ContentProvider>
      
    
  );
}

const ThemeContainer = ({children}:Props) => {
  
  const { theme } = useStateContext()
  return (
      <html lang="en" className={`${theme === 'dark'? 'dark' : ''} scroll-smooth z-30`}>
        <body className="font-body dark:bg-main-dark-bg relative ">
          {children}
          <ThemeModifier/>
        </body>
      </html>
  )
}