import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const travelButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-lg font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-medium hover:shadow-large hover:scale-105 transform duration-300",
  {
    variants: {
      variant: {
        whatsapp: "bg-travel-orange text-travel-white hover:bg-travel-orange/90 border-2 border-travel-orange",
        telegram: "bg-travel-blue text-travel-white hover:bg-travel-blue/90 border-2 border-travel-blue",
        "whatsapp-outline": "bg-transparent text-travel-blue border-2 border-travel-blue hover:bg-travel-blue hover:text-travel-white",
        "telegram-outline": "bg-transparent text-travel-blue border-2 border-travel-blue hover:bg-travel-blue hover:text-travel-white"
      },
      size: {
        default: "h-14 px-8 py-4",
        lg: "h-16 px-10 py-5 text-xl",
        xl: "h-20 px-12 py-6 text-2xl"
      },
    },
    defaultVariants: {
      variant: "whatsapp",
      size: "default",
    },
  }
)

export interface TravelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof travelButtonVariants> {
  asChild?: boolean
}

const TravelButton = React.forwardRef<HTMLButtonElement, TravelButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(travelButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
TravelButton.displayName = "TravelButton"

export { TravelButton, travelButtonVariants }