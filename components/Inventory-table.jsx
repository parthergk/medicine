import { Search } from 'lucide-react'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
const inventory = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    price: 12.99,
    discount: 10,
    inStock: true,
    quantity: 145,
  },
  {
    id: 2,
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    price: 14.50,
    discount: 0,
    inStock: true,
    quantity: 89,
  },
  {
    id: 3,
    name: "Aspirin 325mg",
    category: "Pain Relief",
    price: 9.99,
    discount: 5,
    inStock: true,
    quantity: 210,
  },
  {
    id: 4,
    name: "Cetirizine 10mg",
    category: "Allergy",
    price: 18.75,
    discount: 0,
    inStock: true,
    quantity: 56,
  },
  {
    id: 5,
    name: "Loratadine 10mg",
    category: "Allergy",
    price: 16.99,
    discount: 0,
    inStock: false,
    quantity: 0,
  },
  {
    id: 6,
    name: "Omeprazole 20mg",
    category: "Digestive Health",
    price: 22.50,
    discount: 15,
    inStock: true,
    quantity: 78,
  },
  {
    id: 7,
    name: "Metformin 500mg",
    category: "Diabetes",
    price: 25.99,
    discount: 0,
    inStock: true,
    quantity: 120,
  },
]

export function InventoryTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search inventory..." className="pl-9" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Medicine</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => {
              const finalPrice = item.discount 
                ? item.price * (1 - item.discount / 100) 
                : item.price

              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">${finalPrice.toFixed(2)}</span>
                      {item.discount > 0 && (
                        <>
                          <span className="text-sm text-muted-foreground line-through">
                            ${item.price.toFixed(2)}
                          </span>
                        </>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.inStock ? "success" : "destructive"}>
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" disabled={!item.inStock}>
                      Reserve
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}