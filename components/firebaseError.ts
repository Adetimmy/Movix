"use client"

import { useStateContext } from "@/context/Provider"


export const firebaseError = () => {
    const { logInError, signUpError } = useStateContext()
    let logInMsg: string | null = null
    let signUpMsg: string | null = null
    
    switch (logInError) {
        case logInError:'auth/user-not-found'
        logInMsg = 'user not found'   
            break;
        case logInError:'auth/invalid-password'
        logInMsg = 'wrong password'   
            break;
        case logInError:'auth/invalid-email'
        logInMsg = 'wrong email'   
            break;
        case logInError:'auth/email-already-exists'
        logInMsg = 'user already exists'   
            break;
        default:
            break;
    }
    
    switch (signUpError) {
        case signUpError:'auth/internal-error'
        signUpMsg = 'network error'   
            break;
        case signUpError:'auth/invalid-password'
        signUpMsg = 'wrong password'   
            break;
        case signUpError:'auth/invalid-email'
        signUpMsg = 'wrong email'   
            break;
    
        default:
            break;
    }
    return {logInMsg, signUpMsg}
}


