
"use client"
import { useState, useEffect } from "react"
import { useStateContext } from "@/context/Provider"


export const firebaseError = () => {

    
    const { logInError, signUpError } = useStateContext()
    const [logInMsg, setLogInMsg] = useState<string | null>(null)
    const [signUpMsg, setSignUpMsg] = useState<string | null>(null)
   

 useEffect(() => {



    switch (logInError) {
        case "Firebase: Error (auth/user-not-found).": 
        setLogInMsg(prev =>  'user not found')   
            break;
        case 'Firebase: Error (auth/invalid-password).':
        setLogInMsg(prev =>  'invalid email/password')   
            break;
        case 'Firebase: Error (auth/wrong-password).':
        setLogInMsg(prev =>  'wrong password')   
            break;
        case 'Firebase: Error (auth/invalid-email).':
        setLogInMsg(prev => 'wrong email')   
            break;
        case 'Firebase: Error (auth/email-already-exists).':
        setLogInMsg(prev => 'user already exists')   
            break;
        case 'Firebase: Error (auth/network-request-failed).':
        setLogInMsg(prev => 'Request failed')   
            break;
        default: 
            break;
    }
    
    switch (signUpError) {
        case 'Firebase: Error (auth/internal-error).':
        setSignUpMsg(prev => 'network error')   
            break;
        case 'Firebase: Error (auth/invalid-password).':
        setSignUpMsg(prev => 'wrong password')   
            break;
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
            setSignUpMsg(prev => 'weak password, should be at least 6 characters')   
                break;
        case 'Firebase: Error (auth/invalid-email).':
        setSignUpMsg(prev => 'wrong email')   
            break;
    
        default: 

            break;
    }
    setTimeout(() => {setLogInMsg(null); setSignUpMsg(null)}, 3000)
    console.log(signUpError)
 }, [logInMsg, signUpMsg])



    
     
    return {logInMsg, signUpMsg,}
}


