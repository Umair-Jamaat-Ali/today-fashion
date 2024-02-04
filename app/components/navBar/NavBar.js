'use client'
import React from 'react';
import Link from 'next/link';
import SearchBar from '../searchBar/SearchBar';
import LogOut from '../logout/LogOut';
import { CartModel } from '../cartModel/CartModel';
import GoTop from '../goTop/GoTop';



const NavBar = () => {

  return (
    <div className="min-h-full ">
      <nav className="bg-gray-800 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div>
                <div className="flex-shrink-0 ">
                  <Link href="/"
                    className="text-amber-700 hover:bg-gray-700
                      hover:text-white rounded-md px-3 py-2
                       text-lg font-semibold" >TOᗪᗩY ᖴᗩᔕᕼIOᑎ</Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
                  <Link href="/menProduct" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Men</Link>
                  <Link href="/womenProducts" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Women</Link>
                  <Link href="/kidsProduct" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Kids</Link>
                  <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >Contact</Link>
                
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className='mr-4  '>
                  <button>
                    <SearchBar />
                  </button>
                </div>
                {/* <div className='mr-4 '>
                <Link href="/login">  <Button title="login"/> </Link>
                </div> */}
                <div className='mr-4 '>
                  <LogOut />
                </div>


                <div
                  className="relative rounded-full bg-gray-800 p-1 
                text-gray-400 hover:text-white focus:outline-none focus:ring-2 
                focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <CartModel />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='fixed w-10 h-10 bottom-10 right-12'>
          <GoTop/>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
