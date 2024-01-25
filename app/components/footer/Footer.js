import Image from 'next/image';
import img1 from '../../../public/assets/fb1.png';
import img2 from '../../../public/assets/gh1.png';
import img3 from '../../../public/assets/gm.png';
import img4 from '../../../public/assets/is.png';
import img5 from '../../../public/assets/ln.webp';
import img6 from '../../../public/assets/tw.png';


export default function Footer() {
    return (
        <>
            <div className='bg-black min-h-80  '>
                <div className='p-5 flex justify-between text-gray-200'>
                    <div className='grid-flow-col w-25'>
                        <div className='text-3xl font-bold py-4 text-amber-700'>TOᗪᗩY ᖴᗩᔕᕼIOᑎ</div>
                        <div>Don't change to fit the fashion, change the fashion to fit you.</div>
                    </div>
                    <div className='grid-flow-col w-25'>
                        <div className='py-2 pl-4'>Our Services</div>
                        <div className='py-2 pl-4'>WEEBLY THEMES</div>
                        <div className='py-2 pl-4'>PRE SALE FAQS</div>
                        <div className='py-2 pl-4'>SUBMIT A TICKETS</div>
                    </div>
                    <div className='grid-flow-col w-25'>
                        <div className='py-2 pl-4'>SHOWCASE</div>
                        <div className='py-2 pl-4'>SERVICES</div>
                        <div className='py-2 pl-4'>THEMES TWAEK</div>
                        <div className='py-2 pl-4'>WIDGETKIT</div>
                        <div className='py-2 pl-4'>SUPPORT</div>
                    </div>
                    <div className='grid-flow-col w-25'>
                        <div className='py-2 pl-4'>ABOUT US</div>
                        <div className='py-2 pl-4'>CONTACT US</div>
                        <div className='py-2 pl-4'>AFFILATES</div>
                        <div className='py-2 pl-4'>RESOURCES</div>
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
                    {/* <div className='px-2 rounded-full'>
                        <Image
                            src={img5}
                            className='rounded-full cursor-pointer'
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='px-2 rounded-full'>
                        <Image
                            src={img6}
                            className='rounded-full cursor-pointer'
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div> */}
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
