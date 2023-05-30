'use client'
import ThemeModifier from '@/components/Theme'
import { useStateContext } from '@/context/Provider'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }:Props) {
  const { theme } = useStateContext();
console.log(theme)
  return (
      <div className={`${theme ==='dark'? 'dark' : ''}`}>: 
          <div>
            {children}
            <div className="fixed bottom-4 right-8 z-30">
              <ThemeModifier />
            </div>
          </div>
      </div>
  );
}
