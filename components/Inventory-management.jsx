"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Plus, Search, Trash } from 'lucide-react'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data for demonstration
const inventoryData = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    price: 12.99,
    stock: 145,
    threshold: 30,
    status: "In Stock",
    updated: "2 hours ago",
  },
  {
    id: 2,
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    price: 14.50,
    stock: 89,
    threshold: 25,
    status: "In Stock",
    updated: "1 day ago",
  },
  {
    id: 3,
    name: "Aspirin 325mg",
    category: "Pain Relief",
    price: 9.99,
    stock: 210,
    threshold: 40,
    status: "In Stock",
    updated: "5 hours ago",
  },
  {
    id: 4,
    name: "Cetirizine 10mg",
    category: "Allergy",
    price: 18.75,
    stock: 12,
    threshold: 20,
    status: "Low Stock",
    updated: "3 days ago",
  },
  {
    id: 5,
    name: "Loratadine 10mg",
    category: "Allergy",
    price: 16.99,
    stock: 0,
    threshold: 15,
    status: "Out of Stock",
    updated: "1 week ago",
  },
  {
    id: 6,
    name: "Omeprazole 20mg",
    category: "Digestive Health",
    price: 22.50,
    stock: 78,
    threshold: 25,
    status: "In Stock",
    updated: "2 days ago",
  },
  {
    id: 7,
    name: "Metformin 500mg",
    category: "Diabetes",
    price: 25.99,
    stock: 8,
    threshold: 20,
    status: "Low Stock",
    updated: "12 hours ago",
  },
]

// interface InventoryManagementProps {
//   filter?: "all" | "low-stock" | "out-of-stock" | "reservations"
// }

export function InventoryTable({ filter = "all" }) {
  const [searchQuery, setSearchQuery] = useState("")
  
  // Filter inventory based on the selected tab
  const filteredInventory = inventoryData.filter((item) => {
    if (filter === "low-stock") return item.status === "Low Stock"
    if (filter === "out-of-stock") return item.status === "Out of Stock"
    if (filter === "reservations") return true // In a real app, this would filter for reserved items
    return true
  }).filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search inventory..." 
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Item
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "In Stock"
                        ? "success"
                        : item.status === "Low Stock"
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.updated}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}