import { ArrowLeft, Clock, MapPin, Navigation, Phone, Star } from 'lucide-react'
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InventoryTable } from "@/components/Inventory-management"
import { PharmacyReviews } from "@/components/Pharmacy-reviews"

// Mock data for demonstration
const pharmacy = {
  id: 1,
  name: "HealthPlus Pharmacy",
  address: "123 Main St, New York, NY 10001",
  phone: "(212) 555-1234",
  hours: [
    { day: "Monday - Friday", hours: "8:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
  ],
  rating: 4.7,
  reviews: 128,
  distance: 0.8,
}

export default function PharmacyPage({ params }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6 flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/search">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-xl font-bold md:text-2xl">{pharmacy.name}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold">{pharmacy.name}</h2>
                  <div className="mt-1 flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {pharmacy.address}
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{pharmacy.rating}</span>
                    </div>
                    <span className="mx-1 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {pharmacy.reviews} reviews
                    </span>
                    <span className="mx-1 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {pharmacy.distance} miles away
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                  <Button>
                    <Navigation className="mr-2 h-4 w-4" />
                    Directions
                  </Button>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h3 className="mb-2 font-medium">Hours of Operation</h3>
                <div className="space-y-1">
                  {pharmacy.hours.map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span>{item.day}</span>
                      <span className="font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Tabs defaultValue="inventory">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="inventory" className="mt-4">
                <InventoryTable />
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <PharmacyReviews />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium">Currently Viewing</h3>
              <div className="mt-4 rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Paracetamol 500mg</span>
                  <Badge variant="success">In Stock</Badge>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">$12.99</span>
                    <span className="text-sm text-muted-foreground line-through">
                      $14.99
                    </span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    10% OFF
                  </Badge>
                </div>
                <Button className="mt-3 w-full">Reserve Now</Button>
              </div>

              <div className="mt-6">
                <h3 className="font-medium">Similar Medicines</h3>
                <div className="mt-2 space-y-3">
                  {["Ibuprofen 400mg", "Aspirin 325mg", "Acetaminophen 500mg"].map(
                    (medicine) => (
                      <div
                        key={medicine}
                        className="flex items-center justify-between rounded-md p-2 hover:bg-muted"
                      >
                        <span>{medicine}</span>
                        <Badge variant="outline">Available</Badge>
                      </div>
                    )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}