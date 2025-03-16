"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Updated data for Instagram analytics for all 12 months
const chartData = [
  { month: "January", reels: 320, stories: 200, posts: 150, carousels: 80 },
  { month: "February", reels: 400, stories: 250, posts: 180, carousels: 100 },
  { month: "March", reels: 350, stories: 230, posts: 160, carousels: 90 },
  { month: "April", reels: 300, stories: 180, posts: 140, carousels: 70 },
  { month: "May", reels: 420, stories: 270, posts: 200, carousels: 110 },
  { month: "June", reels: 450, stories: 300, posts: 230, carousels: 120 },
  { month: "July", reels: 500, stories: 320, posts: 260, carousels: 140 },
  { month: "August", reels: 480, stories: 310, posts: 250, carousels: 130 },
  { month: "September", reels: 460, stories: 290, posts: 240, carousels: 120 },
  { month: "October", reels: 490, stories: 310, posts: 260, carousels: 140 },
  { month: "November", reels: 520, stories: 330, posts: 280, carousels: 150 },
  { month: "December", reels: 550, stories: 350, posts: 300, carousels: 160 },
];

// Updated chart configuration
const chartConfig = {
  reels: {
    label: "Reels",
    color: "hsl(var(--chart-1))",
  },
  stories: {
    label: "Stories",
    color: "hsl(var(--chart-2))",
  },
  posts: {
    label: "Posts",
    color: "hsl(var(--chart-3))",
  },
  carousels: {
    label: "Carousels",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export default function InstagramStackedAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Instagram Engagement Analytics</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="carousels"
              type="natural"
              fill="var(--color-carousels)"
              fillOpacity={0.4}
              stroke="var(--color-carousels)"
              stackId="a"
            />
            <Area
              dataKey="posts"
              type="natural"
              fill="var(--color-posts)"
              fillOpacity={0.4}
              stroke="var(--color-posts)"
              stackId="a"
            />
            <Area
              dataKey="stories"
              type="natural"
              fill="var(--color-stories)"
              fillOpacity={0.4}
              stroke="var(--color-stories)"
              stackId="a"
            />
            <Area
              dataKey="reels"
              type="natural"
              fill="var(--color-reels)"
              fillOpacity={0.4}
              stroke="var(--color-reels)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 12.5% this year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - December 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
