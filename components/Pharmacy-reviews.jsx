import { Star, ThumbsDown, ThumbsUp } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Mock data for demonstration
const reviews = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    date: "2 weeks ago",
    content: "Excellent service! The pharmacist was very helpful and they had all the medications I needed in stock. Will definitely come back.",
    helpful: 12,
    unhelpful: 1,
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 4,
    date: "1 month ago",
    content: "Good pharmacy with friendly staff. They were able to fill my prescription quickly. The only reason I'm not giving 5 stars is because the wait time was a bit long.",
    helpful: 8,
    unhelpful: 2,
  },
  {
    id: 3,
    user: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    date: "2 months ago",
    content: "I've been coming to this pharmacy for years and they never disappoint. The staff knows me by name and they always have what I need.",
    helpful: 15,
    unhelpful: 0,
  },
]

export function PharmacyReviews() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Customer Reviews</h3>
        <Button>Write a Review</Button>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={review.user.avatar} alt={review.user.name} />
                  <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{review.user.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm">{review.content}</p>
                  <div className="mt-3 flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{review.helpful}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <ThumbsDown className="h-4 w-4" />
                      <span>{review.unhelpful}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button variant="outline" className="w-full">
        Load More Reviews
      </Button>
    </div>
  )
}