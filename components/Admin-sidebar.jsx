import { BarChart3, Bell, Home, Package, Settings, ShoppingCart, Users } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function AdminSidebar() {
  return (
    <div className="flex h-full w-full flex-col border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
        <Link href="/admin" className="flex items-center gap-2 font-semibold">
          <Package className="h-6 w-6" />
          <span>HealthPlus Admin</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <nav className="grid gap-1 p-2">
          <Link href="/admin" passHref legacyBehavior>
            <Button
              variant="ghost"
              className="justify-start gap-2 text-muted-foreground"
              asChild
            >
              <span>
                <Home className="h-5 w-5" />
                Dashboard
              </span>
            </Button>
          </Link>
          <Link href="/admin/inventory" passHref legacyBehavior>
            <Button
              variant="ghost"
              className="justify-start gap-2 text-muted-foreground"
              asChild
            >
              <span>
                <Package className="h-5 w-5" />
                Inventory
              </span>
            </Button>
          </Link>
          <Link href="/admin/orders" passHref legacyBehavior>
            <Button
              variant="ghost"
              className="justify-start gap-2 text-muted-foreground"
              asChild
            >
              <span>
                <ShoppingCart className="h-5 w-5" />
                Reservations
              </span>
            </Button>
          </Link>
          <Link href="/admin/customers" passHref legacyBehavior>
            <Button
              variant="ghost"
              className="justify-start gap-2 text-muted-foreground"
              asChild
            >
              <span>
                <Users className="h-5 w-5" />
                Customers
              </span>
            </Button>
          </Link>
          <Link href="/admin/analytics" passHref legacyBehavior>
            <Button
              variant="ghost"
              className="justify-start gap-2 text-muted-foreground"
              asChild
            >
              <span>
                <BarChart3 className="h-5 w-5" />
                Analytics
              </span>
            </Button>
          </Link>
          <Link href="/admin/notifications" passHref legacyBehavior>
            <Button
              variant="ghost"
              className="justify-start gap-2 text-muted-foreground"
              asChild
            >
              <span>
                <Bell className="h-5 w-5" />
                Notifications
              </span>
            </Button>
          </Link>
          <Link href="/admin/settings" passHref legacyBehavior>
            <Button
              variant="ghost"
              className="justify-start gap-2 text-muted-foreground"
              asChild
            >
              <span>
                <Settings className="h-5 w-5" />
                Settings
              </span>
            </Button>
          </Link>
        </nav>
      </ScrollArea>
    </div>
  )
}