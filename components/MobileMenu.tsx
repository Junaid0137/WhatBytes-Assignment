import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import { BadgeCheck, ChartNoAxesColumn, MenuIcon } from 'lucide-react'
function MobileMenu() {
    return (
        <div className='md:hidden mt-2'>
            <Sheet>
                <SheetTrigger>
                    <MenuIcon color='#B2B2B2' size={40} className='p-2 hover:opacity-30 rounded-lg text-black' />
                </SheetTrigger>
                <SheetContent side='left'>
                    <div className='h-screen min-w-64'>
                        <img src='https://static.wixstatic.com/media/5715ab_375da3231ff949b8a4b4f2acb19768db~mv2.png' alt='' className='w-64 h-14 m-7' />
                        <div className='mt-20'>
                            <div className='-ml-5 hover:bg-purple-300 py-5 rounded-r-full'>
                                <div className='flex space-x-5 ml-5'>
                                    <ChartNoAxesColumn />
                                    <h1 className='font-bold text-lg text-gray-600'>Dashboard</h1>
                                </div>
                            </div>
                            <div className='-ml-5 hover:bg-purple-300 py-5 rounded-r-full'>
                                <div className='flex space-x-5 ml-5 items-center'>
                                    <BadgeCheck />
                                    <h1 className='font-bold text-lg text-gray-600' >Skill Test</h1>
                                </div>
                            </div>
                            <div className='-ml-5 hover:bg-purple-300 py-5 rounded-r-full'>
                                <div className='flex space-x-5 ml-5 items-center'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                        </svg>
                                    </div>
                                    <h1 className='font-bold text-lg text-gray-600' >Internship</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileMenu
