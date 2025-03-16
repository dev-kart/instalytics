"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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

// Updated chart data for Instagram analytics
const chartData = [
  { category: "Reels", count: 320, fill: "var(--color-reels)" },
  { category: "Stories", count: 250, fill: "var(--color-stories)" },
  { category: "Posts", count: 180, fill: "var(--color-posts)" },
  { category: "Carousels", count: 150, fill: "var(--color-carousels)" },
];

// Updated chart configuration
const chartConfig = {
  count: {
    label: "Engagement",
  },
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

export default function InstagramAnalyticsChart() {
  const totalEngagement = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Instagram Engagement Analytics</CardTitle>
        <CardDescription>December 2024 - January 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalEngagement.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Engagement
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 8.3% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total engagement across Reels, Stories, Posts, and Carousels.
        </div>
      </CardFooter>
    </Card>
  );
}
