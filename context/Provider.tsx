'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, Auth, updateProfile, getAuth } from 'firebase/auth'
import { auth } from '@/utils/firebase'

const StateContext = createContext<any | null>({})

interface contextType{
  children:React.ReactNode
}



const ContentProvider = ({children}:contextType) => {

  const [theme, setTheme] = useState('system');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  
  const signUp =async (email: string, password:any, use:any) => {
    setLoading(true)
    await createUserWithEmailAndPassword(auth, email, password)
      .then(
        async () => {
          await writeName(use)
        }

      ).catch((err) => {
        setError(err.message)
      }).finally(  () => setTimeout( () => {setLoading(false)}, 500) )
  }

  const writeName = async (val:any) => {

    await updateProfile(auth.currentUser as any, {
      displayName: val.userName,
    }).then(() => {
      console.log('Profile Updated')
      localStorage.setItem('user', (val.userName))
      // Profile updated!
      // ...
    }).catch((error) => {
      console.log(error.message)
      // An error occurred
      // ...
    });
  }
  const logIn = async (email: string, password:any) => {
              setLoading(true)
    return  await signInWithEmailAndPassword(auth, email, password)
                  .then(() => console.log('logged In'))
                  .catch((err) => {
                    setError(err.message)
                  }).finally( () => setTimeout( () => {setLoading(false)}, 500) )
  }

  const logOut = async () => { 
    setUser(null)
    await signOut(auth)
  }

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(systemTheme);
    }
  }, []);

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photo: user.photoURL
        })
      }
      else {
        setUser(null)
      }
    })

      setLoading(false)
    return () => unsubscribe()
    

  }, [theme]);

  const handleThemeChange = () => {
    
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  return (
    <StateContext.Provider value={ {theme, handleThemeChange, signUp, logIn, logOut, user, loading, error}}>
        {children}
    </StateContext.Provider> 
  )
}

export default ContentProvider

export const useStateContext = () => useContext(StateContext)