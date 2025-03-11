import { Filter, MapPin, Phone, Star } from 'lucide-react'
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { SearchHeader } from "@/components/Search-header"
import { PharmacyCard } from "@/components/Pharmacy-card"

// Mock data for demonstration
const pharmacies = [
  {
    id: 1,
    name: "HealthPlus Pharmacy",
    address: "123 Main St, New York, NY 10001",
    distance: 0.8,
    inStock: true,
    price: 12.99,
    discount: 10,
    rating: 4.7,
    reviews: 128,
  },
  {
    id: 2,
    name: "MediCare Drugstore",
    address: "456 Park Ave, New York, NY 10002",
    distance: 1.2,
    inStock: true,
    price: 11.50,
    discount: 0,
    rating: 4.5,
    reviews: 96,
  },
  {
    id: 3,
    name: "City Pharmacy",
    address: "789 Broadway, New York, NY 10003",
    distance: 1.5,
    inStock: false,
    price: 10.99,
    discount: 5,
    rating: 4.2,
    reviews: 73,
  },
  {
    id: 4,
    name: "QuickMeds",
    address: "321 5th Ave, New York, NY 10004",
    distance: 2.1,
    inStock: true,
    price: 13.25,
    discount: 0,
    rating: 4.8,
    reviews: 215,
  },
]

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <SearchHeader medicineName="Paracetamol 500mg" />
      
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-64 lg:w-72">
          <Card className="sticky top-6">
            <CardContent className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Sort By</h3>
                  <Select defaultValue="distance">
                    <SelectTrigger className="mt-2 w-full">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="distance">Distance</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium">Availability</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="in-stock" defaultChecked />
                      <label htmlFor="in-stock">In Stock</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="out-of-stock" />
                      <label htmlFor="out-of-stock">Out of Stock</label>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium">Distance</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="distance" id="distance-1" defaultChecked />
                      <label htmlFor="distance-1">Within 1 mile</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="distance" id="distance-3" />
                      <label htmlFor="distance-3">Within 3 miles</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="distance" id="distance-5" />
                      <label htmlFor="distance-5">Within 5 miles</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" name="distance" id="distance-10" />
                      <label htmlFor="distance-10">Within 10 miles</label>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <Button className="w-full">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Found <strong>{pharmacies.length}</strong> pharmacies near you
            </p>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
          
          <div className="space-y-4">
            {pharmacies.map((pharmacy) => (
              <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}