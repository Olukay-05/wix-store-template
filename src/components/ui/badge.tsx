// import * as React from "react"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const badgeVariants = cva(
//   "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
//   {
//     variants: {
//       variant: {
//         default:
//           "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
//         secondary:
//           "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         destructive:
//           "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
//         outline: "text-foreground",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//     },
//   }
// )

// export interface BadgeProps
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof badgeVariants> {}

// function Badge({ className, variant, ...props }: BadgeProps) {
//   return (
//     <div className={cn(badgeVariants({ variant }), className)} {...props} />
//   )
// }

// export { Badge, badgeVariants }

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "w-fit bg-primary px-2 py-1 text-xs text-primary-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
