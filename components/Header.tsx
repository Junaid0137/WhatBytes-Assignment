'use client';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MobileMenu from './MobileMenu'
import { motion } from "framer-motion"
function Header() {
    return (
        <div className='border border-gray-300 flex justify-between items-center'>
            <MobileMenu />
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.15
                }}
            >
                <img src='https://static.wixstatic.com/media/5715ab_375da3231ff949b8a4b4f2acb19768db~mv2.png' alt='' className='w-24 h-6 md:w-64 md:h-14 m-7' />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.15
                }}
                className='p-2 flex space-x-2 md:space-x-4 items-center border border-gray-300 m-7 rounded-xl'>
                <Avatar className='w-6 h-6 md:w-12 md:h-12'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className='text-xs md:text-xl font-bold'>Syed Junaid</h1>
            </motion.div>
        </div>
    )
}

export default Header
