"use client"

import { useState } from "react"
import { MapPin } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LocationSelector() {
  const [useCurrentLocation, setUseCurrentLocation] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState("")

  const handleLocationDetection = () => {
    // In a real app, this would use the Geolocation API
    setUseCurrentLocation(true)
    setSelectedLocation("Current Location")
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Your Location</label>
        <Button
          type="button"
          variant="link"
          size="sm"
          className="h-auto p-0 text-primary"
          onClick={handleLocationDetection}
        >
          <MapPin className="mr-1 h-3 w-3" />
          Use current location
        </Button>
      </div>

      <Select
        value={selectedLocation}
        onValueChange={setSelectedLocation}
        disabled={useCurrentLocation}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select your location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="new-york">New York</SelectItem>
          <SelectItem value="los-angeles">Los Angeles</SelectItem>
          <SelectItem value="chicago">Chicago</SelectItem>
          <SelectItem value="houston">Houston</SelectItem>
          <SelectItem value="phoenix">Phoenix</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}