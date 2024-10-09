import React from 'react'
import { Progress } from './ui/progress'
import { motion } from "framer-motion"
function SyllabusCard() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -100
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 1.5
            }}
            className="border border-b p-5 items-center space-x-5 rounded-xl space-y-8">
            <h1 className="font-bold text-lg">Syllabus Wise Analysis</h1>
            <div>
                <h1 className="text-sm md:text-lg text-gray-600">HTML Tools, Forms</h1>
                <div className="flex mt-2 space-x-5 items-center">
                    <Progress value={80} color='blue' className="min-w-28 md:min-w-96 bg-blue-200" />
                    <h1 className='text-blue-400'>80%</h1>
                </div>
            </div>
            <div>
                <h1 className="text-sm md:text-lg text-gray-600">Tags & Reference in HTML</h1>
                <div className="flex mt-2 space-x-5 items-center">
                    <Progress value={60} color='orange' className="min-w-28 md:min-w-96 bg-orange-200" />
                    <h1 className='text-orange-400'>60%</h1>
                </div>
            </div>
            <div>
                <h1 className="text-sm md:text-lg text-gray-600">Tables & Reference in HTML</h1>
                <div className="flex mt-2 space-x-5 items-center">
                    <Progress value={24} color='red' className="min-w-28 md:min-w-96 bg-red-200" />
                    <h1 className='text-red-400'>24%</h1>
                </div>
            </div>
            <div>
                <h1 className="text-sm md:text-lg text-gray-600">Tables & CSS Bascis</h1>
                <div className="flex mt-2 space-x-5 items-center">
                    <Progress value={96} color='green' className="min-w-28 md:min-w-96 bg-green-200" />
                    <h1 className='text-green-400' >96%</h1>
                </div>
            </div>
        </motion.div>
    )
}

export default SyllabusCard
