import 'server-only'
import { cookies } from 'next/headers'
import { loginAPI } from './auth' 
import { getIronSession } from 'iron-session'

export async function logout() {
  const session = await getSession()
  session.destroy()
}

export async function setSessionToken(data){
  const res = await loginAPI(data)
  const session = await getSession()
  session.token = res.accessToken
  await session.save()
}   

export async function getToken(){
  const session = await getSession()
  return session.token
}

export async function getSession(){
  return await getIronSession(
    cookies(), {
      password: process.env.SESSION_SECRET,
      cookieName: "session", 
      cookieOptions: {
        httpOnly: true,
      }
    })
}