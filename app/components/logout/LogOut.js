"use client"
import { signOut } from "next-auth/react"

export default function LogOut() {
  return (
    <div className="w-[120px] h-[40px] bg-amber-500 pt-2 pl-4 rounded-xl hover:bg-amber-900 hover:scale-x-105 hover:scale-y-105 cursor-pointer'">
    <button onClick={() => signOut()}>logout</button>
    </div>
  )
}
