"use client";

import MainLayout from "@/components/global/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, PieChart, Activity, Users, TrendingUp, AlertCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="bg-background py-8">  {/* Full-width background */}
        <div className="container px-4 mx-auto">  {/* Container for content */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Button className="bg-gradient-gold hover:bg-gold-primary hover:opacity-90">
              Generate Report
            </Button>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Total Users", value: "2,345", icon: <Users className="h-5 w-5" />, change: "+12%" },
              { title: "Active Projects", value: "42", icon: <Activity className="h-5 w-5" />, change: "+7%" },
              { title: "Revenue", value: "$125,400", icon: <TrendingUp className="h-5 w-5" />, change: "+18%" },
              { title: "Alerts", value: "5", icon: <AlertCircle className="h-5 w-5" />, change: "-2" }
            ].map((stat, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className="p-2 bg-gold-light/30 rounded-md">{stat.icon}</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Monthly performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Interactive chart would appear here</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>User Demographics</CardTitle>
                <CardDescription>User distribution by region</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Interactive chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest user and system activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { user: "John Smith", action: "Created a new project", time: "2 hours ago" },
                  { user: "Sarah Johnson", action: "Updated user settings", time: "5 hours ago" },
                  { user: "Michael Brown", action: "Generated AI report", time: "Yesterday" },
                  { user: "Emily Davis", action: "Added team members", time: "2 days ago" }
                ].map((activity, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
        </div>
        </div>
      </div>
    </MainLayout>
  );
}
