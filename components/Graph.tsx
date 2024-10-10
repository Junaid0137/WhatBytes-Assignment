"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useMediaQuery } from "react-responsive";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots";

const chartData = [
    { per: 40 },
    { per: 95 },
    { per: 78 },
    { per: 87 },
    { per: 67 },
    { per: 40 },
    { per: 95 },
    { per: 22 },
    { per: 87 },
    { per: 67 },
];

const chartConfig = {
    per: {
        label: "Percentile",
        color: "blue",
    },
};

const getRangeForPercentile = (per: number) => {
    if (per <= 25) return 0;
    if (per <= 50) return 25;
    if (per <= 75) return 50;
    if (per <= 100) return 75;
    return 100;
};

export default function Graph({ myPer }: { myPer: number, myRank: number, myScore: number }) {
    const myPerExists = chartData.some(data => data.per === myPer);
    const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
    const isMediumOrLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

    if (!myPerExists) {
        chartData.pop();
        chartData.push({ per: myPer });
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
        >
            <Card>
                <CardHeader>
                    <CardTitle>Comparison Graph</CardTitle>
                    <CardDescription>
                        You scored {myPer}%, which is lower than the average percentile (72%) of all engineers who took this assessment
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer config={chartConfig}>
                        <LineChart
                            data={chartData.map((data) => ({
                                ...data,
                                range: getRangeForPercentile(data.per),
                            }))}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />

                            {isSmallScreen && (
                                <XAxis domain={[0, 100]} tickLine={false} axisLine={false} className="hidden" />
                            )}
                            {isMediumOrLargeScreen && (
                                <YAxis domain={[0, 100]} tickLine={false} axisLine={false} />
                            )}
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />


                            <Line
                                dataKey="per"
                                type="natural"
                                stroke="#A594F9"
                                strokeWidth={2}
                                dot={(props) => (
                                    <>
                                        <circle
                                            cx={props.cx}
                                            cy={props.cy}
                                            r={props.r}
                                            fill={props.payload.per === myPer ? "red" : "#A594F9"}
                                        />
                                        {props.payload.per === myPer && (
                                            <>
                                                <text className="hidden md:inline"
                                                    x={props.cx - 20}
                                                    y={props.cy + 20}
                                                    fill="#A594F9"
                                                    textAnchor="middle"
                                                >
                                                    Your
                                                </text>
                                                <text className="hidden md:inline"
                                                    x={props.cx - 20}
                                                    y={props.cy + 30}
                                                    fill="#A594F9"
                                                    textAnchor="middle"
                                                >
                                                    Percentile
                                                </text>
                                            </>
                                        )}
                                    </>
                                )}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </motion.div>
    );
}
