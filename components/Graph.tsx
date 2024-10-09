"use client"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { motion } from "framer-motion"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartData = [
    { range: "0", rank: 186, per: 80, score: 5 },
    { range: "25", rank: 305, per: 200, score: 6 },
    { range: "50", rank: 237, per: 120, score: 7 },
    { range: "75", rank: 73, per: 190, score: 8 },
    { range: "100", rank: 209, per: 130, score: 9 },
]

const chartConfig = {
    rank: {
        label: "Rank",
        color: "green",
    },
    per: {
        label: "Percentile",
        color: "red",
    },
    score: {
        label: "Score",
        color: "blue",
    },
} satisfies ChartConfig

export default function Graph() {
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
            <Card>
                <CardHeader>
                    <CardTitle>Comparison Graph</CardTitle>
                    <CardDescription>You scored {myPer}%, which is lower than the average percentile (72%) of all engineers who took this assessment</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="range"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />

                            {/* Rank Line */}
                            <Line
                                dataKey="rank"
                                type="natural"
                                stroke="red"  // Unique color for rank line
                                strokeWidth={2}
                                dot={{
                                    fill: "red",
                                }}
                                activeDot={{
                                    r: 6,
                                }}
                            />

                            {/* Percentile Line */}
                            <Line
                                dataKey="per"
                                type="natural"
                                stroke="green"  // Unique color for percentile line
                                strokeWidth={2}
                                dot={{
                                    fill: "green",
                                }}
                                activeDot={{
                                    r: 6,
                                }}
                            />

                            {/* Score Line */}
                            <Line
                                dataKey="score"
                                type="natural"
                                stroke="blue"  // Unique color for score line
                                strokeWidth={2}
                                dot={{
                                    fill: "blue",
                                }}
                                activeDot={{
                                    r: 6,
                                }}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </motion.div>
    )
}
