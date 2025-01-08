import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-[#FFFFFF] flex justify-between w-[80vw] fixed top-12 right-[10vw] rounded-full py-3 px-8'>
            <div className="logo flex gap-5 items-center">
                <Link href={"/"}><svg className='h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve"><path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path></svg></Link>
                <ul className='flex gap-8'>
                    <Link className='cursor-pointer hover:bg-gray-200 p-2 rounded-lg' href={"/template"}><li>Templates</li></Link>
                    <Link className='cursor-pointer hover:bg-gray-200 p-2 rounded-lg' href={"https://linktr.ee/marketplace"}><li>Marketplace</li></Link>
                    <Link className='cursor-pointer hover:bg-gray-200 p-2 rounded-lg' href={"https://linktr.ee/s/creator/linktree-for-instagram"}><li>Discover</li></Link>
                    <Link className='cursor-pointer hover:bg-gray-200 p-2 rounded-lg' href={"https://linktr.ee/s/pricing"}><li>Pricing</li></Link>
                    <Link className='cursor-pointer hover:bg-gray-200 p-2 rounded-lg' href={"https://linktr.ee/blog/"}><li>Learn</li></Link>
                </ul>
            </div>

            <div className='flex gap-2'>
                <Link href={'/login'}><button type="button" className="text-black font-bold bg-[#E9E9E9] hover:bg-[#D6D6D6] focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-base px-7 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 transition duration-300 ease-in-out">Log in</button></Link>
                <Link href={'/generate'}><button type="button" className="text-white bg-[#1E2330] hover:bg-[#2C3245] focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-full text-base px-7 py-4 me-2 mb-2 dark:bg-[#1E2330] dark:hover:bg-[#2C3245] dark:focus:ring-gray-700 dark:border-gray-700 transition duration-300 ease-in-out">Sign up free </button></Link>
            </div>

        </nav>
    )
}

export default Navbar