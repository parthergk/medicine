import { ArrowRight } from 'lucide-react'
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Mock data for demonstration
const topMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    requests: 245,
    stock: 145,
    percentage: 85,
  },
  {
    id: 2,
    name: "Cetirizine 10mg",
    category: "Allergy",
    requests: 187,
    stock: 12,
    percentage: 65,
  },
  {
    id: 3,
    name: "Omeprazole 20mg",
    category: "Digestive Health",
    requests: 156,
    stock: 78,
    percentage: 54,
  },
  {
    id: 4,
    name: "Metformin 500mg",
    category: "Diabetes",
    requests: 132,
    stock: 8,
    percentage: 46,
  },
  {
    id: 5,
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    requests: 118,
    stock: 89,
    percentage: 41,
  },
]

export function TopMedicines() {
  return (
    <div className="space-y-4">
      {topMedicines.map((medicine) => (
        <div key={medicine.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{medicine.name}</div>
              <div className="text-sm text-muted-foreground">
                {medicine.category}
              </div>
            </div>
            <Badge
              variant={medicine.stock < 20 ? "destructive" : "outline"}
              className="ml-auto"
            >
              {medicine.stock} in stock
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={medicine.percentage} className="h-2" />
            <span className="text-sm font-medium">{medicine.percentage}%</span>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{medicine.requests} requests this month</span>
            <Button variant="ghost" size="sm" asChild className="h-auto p-0">
              <Link href={`/admin/inventory/${medicine.id}`}>
                Details
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}