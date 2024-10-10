'use client';
import React from 'react'
import { motion } from "framer-motion"
function QuickCard({ rank, percentile, score }: { rank: number, percentile: number, score: number }) {
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
            className="border border-b p-5 items-center rounded-xl">
            <h1 className="font-bold text-lg">Quick Statistics</h1>
            <div className="flex flex-col md:flex-row">
                <div className="flex items-center p-5 space-x-4 md:border-r md:border-gray-300">
                    <div className="px-1 py-3 border border-black rounded-full bg-gray-100">
                        <img src="https://www.pngplay.com/wp-content/uploads/8/Trophy-Transparent-PNG.png" alt="" className="w-12 h-8" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">{rank}</h1>
                        <h3 className="text-gray-500 text-sm font-semibold">YOUR RANK</h3>
                    </div>
                </div>
                <div className="flex items-center p-5 space-x-4 md:border-r md:border-gray-300">
                    <div className="p-3 border border-black rounded-full bg-gray-100">
                        <img src="https://cdn-icons-png.flaticon.com/512/4138/4138081.png" alt="" className="w-8 h-8" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">{percentile}%</h1>
                        <h3 className="text-gray-500 text-sm font-semibold uppercase">Percentile</h3>
                    </div>
                </div>
                <div className="flex items-center p-5 space-x-4">
                    <div className="p-3 border border-black rounded-full bg-gray-100">
                        <img src="https://image.similarpng.com/very-thumbnail/2020/11/Correct-icon-button-on-transparent-background-PNG.png" alt="" className="w-8 h-8" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">{score} / 15</h1>
                        <h3 className="text-gray-500 text-sm font-semibold uppercase">correct answers</h3>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default QuickCard
