"use client"

import { useState } from "react"
import { ArrowLeft, Search } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchHeader({ medicineName }) {
  const [searchQuery, setSearchQuery] = useState(medicineName)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-xl font-bold md:text-2xl">Search Results</h1>
      </div>

      <div className="relative">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 py-5"
        />
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Button className="absolute right-1 top-1/2 -translate-y-1/2">
          Search
        </Button>
      </div>
    </div>
  )
}