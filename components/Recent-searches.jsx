"use client"

import { useState } from "react"
import { Clock, X } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentSearches() {
  const [searches, setSearches] = useState([
    "Paracetamol 500mg",
    "Vitamin D3",
    "Omeprazole 20mg",
    "Metformin 500mg",
  ])

  const removeSearch = (index) => {
    setSearches(searches.filter((_, i) => i !== index))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Searches</CardTitle>
        {searches.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearches([])}
            className="h-auto p-0 text-muted-foreground"
          >
            Clear all
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {searches.length > 0 ? (
          <ul className="space-y-2">
            {searches.map((search, index) => (
              <li key={index} className="group flex items-center justify-between">
                <Link
                  href={`/search?medicine=${search}`}
                  className="flex flex-1 items-center rounded-md p-2 hover:bg-muted"
                >
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{search}</span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSearch(index)}
                  className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove</span>
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-3 text-center text-muted-foreground">
            No recent searches
          </div>
        )}
      </CardContent>
    </Card>
  )
}