"use client"
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Router() {
    const router = useRouter();
  return (
    <div>
        <ul className="flex justify-evenly bg-gray-200 p-4">
        <li className={`mr-4 ${router.pathname === '/men' ? 'text-green-500' : 'text-blue-500'}`}>
          <Link href="/men" className="hover:border-b-2 border-blue-500">Men</Link>
        </li>

        <li className={`mr-4 ${router.pathname === '/women' ? 'text-green-500' : 'text-blue-500'}`}>
          <Link href="/women" className="hover:border-b-2 border-blue-500">Women</Link>
        </li>

        <li className={`mr-4 ${router.pathname === '/kids' ? 'text-green-500' : 'text-blue-500'}`}>
          <Link href="/kids" className="hover:border-b-2 border-blue-500">Kids</Link>
        </li>

        <li className={`mr-4 ${router.pathname === '/fashion' ? 'text-green-500' : 'text-blue-500'}`}>
          <Link href="/fashion" className="hover:border-b-2 border-blue-500">Fashion</Link>
        </li>
      </ul>
    </div>
  )
}
