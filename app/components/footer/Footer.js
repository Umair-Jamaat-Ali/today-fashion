import Image from 'next/image';
import img1 from '../../../public/assets/fb1.png';
import img2 from '../../../public/assets/gh1.png';
import img3 from '../../../public/assets/gm.png';
import img4 from '../../../public/assets/is.png';
import img5 from '../../../public/assets/ln.webp';
import img6 from '../../../public/assets/tw.png';
import GoTop from '../goTop/GoTop';
import Link from 'next/link';


export default function Footer() {
    return (
        <>
            <div className='bg-black min-h-80  '>
                <div className='p-5 flex justify-between text-gray-200'>
                    <div className='grid-flow-col w-25'>
                        <div className='text-3xl font-bold py-4 text-amber-700'>TOᗪᗩY ᖴᗩᔕᕼIOᑎ</div>
                        <div>Don&apos;t change to fit the fashion, change the fashion to fit you.</div>
                    </div>
                    <div className='grid-flow-col w-25'>
                        <div className='py-6 text-lg font-semibold pl-4'>Shop Men</div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Clothing Fashion</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Winter</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Summer</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Formal</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Casual</Link></div>
                    </div>
                    <div className='grid-flow-col w-25'>
                        <div className='py-6 text-lg font-semibold pl-4'>Shop Women</div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Clothing Fashion</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Winter</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Summer</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Formal</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Casual</Link></div>
                    </div>
                    <div className='grid-flow-col w-25'>
                        <div className='py-6 text-lg font-semibold pl-4'>Baby Collection</div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Clothing Fashion</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Winter</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Summer</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Formal</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Casual</Link></div>
                    </div>
                    <div className='grid-flow-col w-25'>
                        <div className='py-6 text-lg font-semibold pl-4'>Quick Links</div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Track Your Order</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Support</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>FAQ</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>About</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Carrier</Link></div>
                        <div className='py-2 pl-4 hover:bg-amber-700'><Link href='/'>Contact Us</Link></div>
                    </div>
                </div>
                <hr className='text-white mx-10' />
                <div className='flex justify-center py-20'>
                    <div className='px-2 rounded-full'>
                        <Image
                            src={img1}
                            className='rounded-full cursor-pointer'
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='px-2 rounded-full'>
                        <Image
                            src={img2}
                            className='rounded-full cursor-pointer'
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='px-2 rounded-full'>
                        <Image
                            src={img3}
                            className='rounded-full cursor-pointer'
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='px-2 rounded-full'>
                        <Image
                            src={img4}
                            className='rounded-full cursor-pointer'
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className='py-5 text-center text-green-800'>
                    <p>&#169; Copyright. All rights reserved.This design created 
                        <span className='text-red-900'> &#10084; &#65039;</span> by 
                       <span className='text-white'> UMAIR JAMAAT ALI</span>.(2024) </p>
                </div>
            </div>
        </>
    )
}
