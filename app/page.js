import { Search } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LocationSelector } from '@/components/Location-selector'
import { PopularMedicines } from "@/components/Popular-medicines"
import { RecentSearches } from "@/components/Recent-searches"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Find Medicines Near You
          </h1>
          <p className="mt-4 text-muted-foreground">
            Search for medicines and check availability in nearby pharmacies
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-primary/10 shadow-md">
          <CardContent className="p-6">
            <form action="/search" className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  name="medicine"
                  placeholder="Enter medicine name..."
                  className="pl-10 py-6 text-lg"
                />
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              </div>

              <LocationSelector />

              <Button type="submit" size="lg" className="w-full py-6 text-lg">
                Find Medicine
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <PopularMedicines />
          <RecentSearches />
        </div>
      </div>
    </div>
  )
}