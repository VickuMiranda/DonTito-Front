'use server'

import { setSessionToken } from "../lib/api/session" 

const ROOT_PATH = "/example"

export async function login(data){
   await setSessionToken(data)
}
