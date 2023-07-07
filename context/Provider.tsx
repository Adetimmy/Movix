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
  const [themeUpdate, setThemeUpdate] = useState<string>('System');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<any>(null)
  const [signUpError, setSignUpError] = useState<Error | null>(null)
  const [logInError, setLogInError] = useState<Error | null>(null)

  
  const signUp =async (email: string, password:any, use:any) => {
    setLoading(true)
    await createUserWithEmailAndPassword(auth, email, password)
      .then(
        async () => {
          await writeName(use)
        }

      ).catch((err) => {
        setSignUpError(err.message)
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
                    setLogInError(err.message)
                    console.log(err.message)
                    err.message === "Firebase: Error (auth/invalid-email)."? console.log(true) : console.log(false)
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
  
    const savedTheme = localStorage.getItem('theme') as string;
  
    if (savedTheme) {
      setTheme(systemTheme);
      setThemeUpdate('System')
    } 
    else {
      setTheme(theme);
      setThemeUpdate(theme)
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
        localStorage.setItem('userLoggedIn', user?.displayName as string)
      }
      else {
        setUser(null)
      }
    })

      setLoading(false)
    return () => unsubscribe()
    

  }, [theme]);

  const handleThemeChange = () => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
 
    if (themeUpdate === 'System') {
      setThemeUpdate('Dark')
      setTheme('dark');
    } 
    else if (themeUpdate === 'Dark'){
      setThemeUpdate('Light')
      setTheme(systemTheme === 'dark'? 'light' : systemTheme);
    }
    else {
      setThemeUpdate('System')
      setTheme(systemTheme);
    }
  };

  return (
    <StateContext.Provider value={ {theme, handleThemeChange, signUp, logIn, logOut, user, loading, signUpError,
      logInError, themeUpdate}}>
        {children}
    </StateContext.Provider> 
  )
}

export default ContentProvider

export const useStateContext = () => useContext(StateContext)
