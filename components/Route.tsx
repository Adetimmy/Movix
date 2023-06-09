'use client'
import { useStateContext } from '@/context/Provider'
import { useRouter } from 'next/navigation'
import { useEffect} from 'react'


interface C {
    children:React.ReactNode
}


const Route = ({children}:C) => {
    const router = useRouter()
    const { user } = useStateContext()


    useEffect( () => {
        if(!user && !(localStorage.getItem('userLoggedIn'))){
          return  router.push('/auth')
        }
    }, [router, user])

  return <> {user && localStorage.getItem('userLoggedIn') && children } </>
}

export default Route