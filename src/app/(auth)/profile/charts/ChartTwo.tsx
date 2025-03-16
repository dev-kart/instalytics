"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

// Updated data for Instagram analytics
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

export default function InstagramBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Instagram Engagement Analytics</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="reels" fill="var(--color-reels)" radius={4} />
            <Bar dataKey="stories" fill="var(--color-stories)" radius={4} />
            <Bar dataKey="posts" fill="var(--color-posts)" radius={4} />
            <Bar dataKey="carousels" fill="var(--color-carousels)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 12.5% this year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing engagement data for the last 12 months
        </div>
      </CardFooter>
    </Card>
  );
}
