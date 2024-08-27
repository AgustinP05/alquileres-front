"use client"
import {CiMenuFries} from 'react-icons/ci'
import {BsTelephone} from 'react-icons/bs'

import Link from "next/link"
import { Navbar } from '../Navbar'
import { useState } from 'react'


export function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className="container mx-auto my-5">
            <div className="flex items-center justify-between px-5 md:px-0">
                <Link href="/">
                    <h1 className="font-bold">Alquileres</h1>
                </Link>
                <CiMenuFries className='block text-2xl md:hidden' onClick={()=>setOpenMenu(!openMenu)}/>

                <Navbar openMenu={openMenu}/>

                <div className='flex items-center gap-2 md:gap-5'>
                    <Link href="tel:123456789" className='flex items-center gap-4 cursor-pointer'>
                        <BsTelephone/>
                        <span className='hidden md:block'>+54 9 11 1234-5678</span>
                    </Link>
                    {/* <Link href="/login" className='px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black'>
                        Login
                    </Link> */}
                </div>
            </div>
        </div>
    )
}
