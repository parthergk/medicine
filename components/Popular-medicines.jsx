import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const popularMedicines = [
  { name: "Paracetamol", searches: 12500 },
  { name: "Amoxicillin", searches: 8700 },
  { name: "Ibuprofen", searches: 7300 },
  { name: "Aspirin", searches: 6200 },
  { name: "Cetirizine", searches: 5100 },
]

export function PopularMedicines() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Medicines</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {popularMedicines.map((medicine) => (
            <li key={medicine.name}>
              <Link
                href={`/search?medicine=${medicine.name}`}
                className="flex items-center justify-between rounded-md p-2 hover:bg-muted"
              >
                <span>{medicine.name}</span>
                <span className="text-sm text-muted-foreground">
                  {medicine.searches.toLocaleString()} searches
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}