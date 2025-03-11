import { ArrowUpRight, Package, Pill, TrendingUp, Users } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminHeader } from "@/components/Admin-header"
import { InventoryManagement } from "@/components/Inventory-management"
import { StockChart } from "@/components/Stock-chart"
import { TopMedicines } from "@/components/Top-medicines"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      
      <div className="flex-1 space-y-6 p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Inventory
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">1,248</h3>
                </div>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Package className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span>12% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Low Stock Items
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">24</h3>
                </div>
                <div className="rounded-full bg-yellow-500/10 p-3 text-yellow-500">
                  <Pill className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-red-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span>8% from last week</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Reservations
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">32</h3>
                </div>
                <div className="rounded-full bg-blue-500/10 p-3 text-blue-500">
                  <Package className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span>18% from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Customers
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">2,845</h3>
                </div>
                <div className="rounded-full bg-green-500/10 p-3 text-green-500">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span>5% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Stock Trends</CardTitle>
              <CardDescription>
                Monitor your inventory levels over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StockChart />
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Top Medicines</CardTitle>
                <CardDescription>
                  Most requested medicines this month
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <TopMedicines />
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Inventory Management</CardTitle>
            <CardDescription>
              Update stock levels and manage your inventory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Items</TabsTrigger>
                <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
                <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
                <TabsTrigger value="reservations">Reservations</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <InventoryManagement />
              </TabsContent>
              <TabsContent value="low-stock" className="mt-4">
                <InventoryManagement filter="low-stock" />
              </TabsContent>
              <TabsContent value="out-of-stock" className="mt-4">
                <InventoryManagement filter="out-of-stock" />
              </TabsContent>
              <TabsContent value="reservations" className="mt-4">
                <InventoryManagement filter="reservations" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}