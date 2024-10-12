/* eslint-disable @next/next/no-img-element */
'use client';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Graph from "@/components/Graph";
import ScoreGraph from "@/components/ScoreGraph";
import QuickCard from "@/components/QuickCard";
import SyllabusCard from "@/components/SyllabusCard";
import { toast } from "sonner";
export default function Home() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(90);
  const [score, setScore] = useState(10);
  const [newRank, setNewRank] = useState(rank);
  const [newPercentile, setNewPercentile] = useState(percentile);
  const [newScore, setNewScore] = useState(score);
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = () => {
    if ((newPercentile <= 100 && newPercentile >= 1) && (newScore <= 15 && newScore >= 0) && (newRank >= 1)) {
      setRank(newRank);
      setPercentile(newPercentile);
      setScore(newScore);
      setIsOpen(false);
      toast.success('Data Updated Successfully');
    } else {
      if (newPercentile > 100 || newPercentile <= 0) {
        toast.error('Percentile is invalid')
      }
      if (newScore > 15 || newScore < 0) {
        toast.error('Score is invalid');
      }
      if (newRank <= 0) {
        toast.error('Rank is invalid');
      }
    }
  }
  return (
    <div className="md:p-10 mx-auto">
      <h1 className="text-lg text-gray-500 pl-2 pt-5 md:pt-0">Skill Test</h1>
      <div className="mt-5 flex xl:space-x-5 flex-col xl:flex-row max-w-80 md:max-w-full space-y-5 xl:space-y-0">
        <div className="space-y-5">
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
            className="border border-b p-5 flex items-center space-x-5 rounded-xl flex-col md:flex-row">
            <div className="flex items-center space-x-5">
              <img src="https://static.wixstatic.com/media/5715ab_1553d94184694c43a4239580e8db730e~mv2.png" alt="" className=" w-8 h-8 md:w-16 md:h-16" />
              <div>
                <h1 className="text-sm md:text-lg font-bold">Hyber Text Markup Language</h1>
                <h3 className="font-semibold text-gray-500 text-xs md:text-lg">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</h3>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="w-16 h-8 fixed bottom-4 right-4 md:static">Update</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Update Score</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="items-center justify-between flex">
                      <div className='flex space-x-2 items-center'>
                        <div className='px-2 border border-black rounded-full bg-blue-900 text-white'>
                          1
                        </div>
                        <h1>Update your Rank</h1>
                      </div>
                      <Input
                        id="name"
                        defaultValue={rank}
                        className="w-32"
                        onChange={(e) => setNewRank(Number(e.target.value))}
                        type="number"
                      />
                    </div>
                    <div className="items-center justify-between flex">
                      <div className='flex space-x-2 items-center'>
                        <div className='px-2 border border-black rounded-full bg-blue-900 text-white'>
                          2
                        </div>
                        <h1>Update your Percentile</h1>
                      </div>
                      <Input
                        id="name"
                        defaultValue={percentile}
                        className="w-32"
                        onChange={(e) => setNewPercentile(Number(e.target.value))}
                        type="number"
                      />
                    </div>
                    <div className="items-center justify-between flex">
                      <div className='flex space-x-2 items-center'>
                        <div className='px-2 border border-black rounded-full bg-blue-900 text-white'>
                          3
                        </div>
                        <div>
                          <h1>Update your Current Score</h1>
                          <h1>out of 15</h1>
                        </div>
                      </div>
                      <Input
                        id="name"
                        defaultValue={score}
                        className="w-32"
                        onChange={(e) => setNewScore(Number(e.target.value))}
                        type="number"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
          <QuickCard rank={rank} percentile={percentile} score={score} />
          <Graph myPer={percentile} myRank={rank} myScore={score} />
        </div>
        <div className="space-y-5">
          <SyllabusCard />
          <ScoreGraph score={score} />
        </div>
      </div>
    </div>
  );
}
