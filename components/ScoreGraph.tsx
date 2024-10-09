"use client"
import { motion } from "framer-motion"
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export const description = "A radial chart with text"

const chartData = [
    { browser: "safari", visitors: 15, fill: "var(--color-safari)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function ScoreGraph({ score }: { score: number }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 100
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 1.5
            }}
        >
            <Card className="flex flex-col">
                <CardHeader className="pb-0">
                    <CardTitle className="flex justify-between">
                        <h1 className="font-bold text-lg">Question Analysis</h1>
                        <h1 className="font-bold text-lg">{score} / 15</h1>
                    </CardTitle>
                    <CardDescription>You Scored {score} questions correct out of 15. However it still need some improvement</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <RadialBarChart
                            data={chartData}
                            startAngle={0}
                            endAngle={score / 15 * 360}
                            innerRadius={80}
                            outerRadius={110}
                        >
                            <PolarGrid
                                gridType="circle"
                                radialLines={false}
                                stroke="none"
                                className="first:fill-muted last:fill-background"
                                polarRadius={[86, 74]}
                            />
                            <RadialBar dataKey="visitors" background cornerRadius={10} />
                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                <Label
                                    content={({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-4xl font-bold"
                                                    >
                                                        {`${score}/15`}
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        score
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </PolarRadiusAxis>
                        </RadialBarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </motion.div>
    )
}
