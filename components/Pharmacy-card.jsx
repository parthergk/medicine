import { MapPin, Navigation, Phone, Star } from 'lucide-react'
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// interface PharmacyCardProps {
//   pharmacy: {
//     id: number
//     name: string
//     address: string
//     distance: number
//     inStock: boolean
//     price: number
//     discount: number
//     rating: number
//     reviews: number
//   }
// }

export function PharmacyCard({ pharmacy }) {
  const finalPrice = pharmacy.discount 
    ? pharmacy.price * (1 - pharmacy.discount / 100) 
    : pharmacy.price

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between">
              <div>
                <Link 
                  href={`/pharmacy/${pharmacy.id}`}
                  className="text-lg font-medium hover:text-primary hover:underline"
                >
                  {pharmacy.name}
                </Link>
                <div className="mt-1 flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-3 w-3" />
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
              <Badge variant={pharmacy.inStock ? "success" : "destructive"}>
                {pharmacy.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">${finalPrice.toFixed(2)}</span>
                  {pharmacy.discount > 0 && (
                    <>
                      <span className="text-sm text-muted-foreground line-through">
                        ${pharmacy.price.toFixed(2)}
                      </span>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {pharmacy.discount}% OFF
                      </Badge>
                    </>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Phone className="mr-1 h-4 w-4" />
                  Call
                </Button>
                <Button variant="outline" size="sm">
                  <Navigation className="mr-1 h-4 w-4" />
                  Directions
                </Button>
                <Button size="sm" disabled={!pharmacy.inStock}>
                  Reserve
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}