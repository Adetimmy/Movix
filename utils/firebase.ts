// Import the functions you need from the SDKs you need
import { cfg } from "@/context/firecfg";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";





// Initialize Firebase
const app = initializeApp(cfg);
export const auth = getAuth()


export default app