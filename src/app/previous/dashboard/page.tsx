"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/app/previous/dashboard/components/date-range-picker";
import { MainNav } from "@/app/previous/dashboard/components/main-nav";
import { Overview } from "@/app/previous/dashboard/components/overview";
import { RecentSales } from "@/app/previous/dashboard/components/recent-sales";
import { Search } from "@/app/previous/dashboard/components/search";
import TeamSwitcher from "@/app/previous/dashboard/components/team-switcher";
import { UserNav } from "@/app/previous/dashboard/components/user-nav";
import Sidebar from "@/app/previous/dashboard/components/sidebar";
import { Menu } from "lucide-react";

interface OverviewData {
  // Define properties of overviewData here
  totalUsers: number;
  totalSales: number;
  // Add more properties as needed
}

interface Sale {
  id: number;
  userName: string;
  userEmail: string;
  userAvatar: string;
  amount: string;
}

interface DashboardData {
  revenue: number;
  revenueGrowth: string;
  subscriptions: number;
  subscriptionsGrowth: string;
  sales: number;
  salesGrowth: string;
  activeNow: number;
  activeNowGrowth: string;
  overviewData: OverviewData;
  recentSales: Sale[];
}

const mockData: DashboardData = {
  revenue: 10000,
  revenueGrowth: "5%",
  subscriptions: 200,
  subscriptionsGrowth: "10%",
  sales: 150,
  salesGrowth: "8%",
  activeNow: 75,
  activeNowGrowth: "3%",
  overviewData: {
    totalUsers: 500,
    totalSales: 300,
  },
  recentSales: [
    {
      id: 1,
      userName: "Olivia Martin",
      userEmail: "olivia.martin@email.com",
      userAvatar: "/avatars/01.png",
      amount: "$1,999.00",
    },
    {
      id: 2,
      userName: "Jackson Lee",
      userEmail: "jackson.lee@email.com",
      userAvatar: "/avatars/02.png",
      amount: "$39.00",
    },
    {
      id: 3,
      userName: "Isabella Nguyen",
      userEmail: "isabella.nguyen@email.com",
      userAvatar: "/avatars/03.png",
      amount: "$299.00",
    },
    {
      id: 4,
      userName: "William Kim",
      userEmail: "will@email.com",
      userAvatar: "/avatars/04.png",
      amount: "$99.00",
    },
    {
      id: 5,
      userName: "Sofia Davis",
      userEmail: "sofia.davis@email.com",
      userAvatar: "/avatars/05.png",
      amount: "$39.00",
    },
  ],
};

// ... [Previous interfaces and mock data remain the same]

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(mockData);
      }, 1000);
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className="flex h-screen justify-center items-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="lg:hidden fixed z-50 bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static lg:shrink-0 z-40 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar
          collapsed={!sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <header className="border-b border-gray-100 sticky top-0 z-30 bg-white/80 backdrop-blur-sm">
          <div className="flex h-16 items-center gap-4 px-4 sm:px-6">
            {/* Sidebar Toggle Button */}
            <button
              className="hidden lg:block text-gray-600 hover:text-gray-900"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center gap-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-6 space-y-8">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Dashboard
              </h2>
              <div className="flex items-center gap-4">
                <CalendarDateRangePicker />
                <Button className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-lg shadow-indigo-500/20 border-0">
                  Download
                </Button>
              </div>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="w-full justify-start p-1 bg-gray-100/50 rounded-xl">
                <TabsTrigger
                  value="overview"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-md transition-all duration-200"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger value="analytics" disabled>
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="reports" disabled>
                  Reports
                </TabsTrigger>
                <TabsTrigger value="notifications" disabled>
                  Notifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Revenue Card */}
                  <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">
                        Total Revenue
                      </CardTitle>
                      <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF3B30"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{data.revenue}</div>
                      <p className="text-sm text-emerald-600 mt-2 font-medium">
                        {data.revenueGrowth} from last month
                      </p>
                    </CardContent>
                  </Card>

                  {/* Subscriptions Card */}
                  <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">
                        Subscriptions
                      </CardTitle>
                      <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5856D6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {data.subscriptions}
                      </div>
                      <p className="text-sm text-emerald-600 mt-2 font-medium">
                        {data.subscriptionsGrowth} from last month
                      </p>
                    </CardContent>
                  </Card>

                  {/* Sales Card */}
                  <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">
                        Sales
                      </CardTitle>
                      <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#007AFF"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <path d="M2 10h20" />
                        </svg>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{data.sales}</div>
                      <p className="text-sm text-emerald-600 mt-2 font-medium">
                        {data.salesGrowth} from last month
                      </p>
                    </CardContent>
                  </Card>

                  {/* Active Now Card */}
                  <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-lg font-medium">
                        Active Now
                      </CardTitle>
                      <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF9500"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{data.activeNow}</div>
                      <p className="text-sm text-emerald-600 mt-2 font-medium">
                        {data.activeNowGrowth}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
                  <Card className="lg:col-span-4 bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Overview data={data.overviewData} />
                    </CardContent>
                  </Card>

                  <Card className="lg:col-span-3 bg-white/50 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50">
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                      <CardDescription className="text-gray-600">
                        You made 265 sales this month.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales sales={data.recentSales} />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
