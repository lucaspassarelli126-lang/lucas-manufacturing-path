import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { usePreloader } from "@/context/PreloaderContext";

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-full transition-all duration-300",
    {
        variants: {
            variant: {
                default: "bg-primary/5 hover:bg-primary/10 border-primary/20 text-primary-foreground",
                solid: "bg-primary hover:bg-primary/90 text-primary-foreground border-transparent transition-all duration-200",
                ghost: "border-transparent bg-transparent hover:border-zinc-600 hover:bg-white/10",
                destructive: "bg-destructive hover:bg-destructive/90 text-destructive-foreground border-transparent",
                outline: "border-white/20 text-white rounded-none hover:bg-white hover:text-black",
            },
            size: {
                default: "px-7 py-2 ",
                sm: "px-4 py-1 ",
                lg: "px-10 py-3 ",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { 
      neon?: boolean;
      asChild?: boolean;
      withPreloader?: boolean;
    }

const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, asChild = false, size, variant, children, onClick, withPreloader = false, ...props }, ref) => {
        const { showPreloader } = usePreloader();
        const Comp = asChild ? Slot : "button"
        
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
          if (withPreloader) {
            e.preventDefault();
            showPreloader(() => {
              if (onClick) {
                onClick(e);
              }
            });
          } else if (onClick) {
            onClick(e);
          }
        };

        if (asChild) {
            return (
                <Comp
                    className={cn(buttonVariants({ variant, size }), className)}
                    ref={ref}
                    onClick={handleClick}
                    {...props}
                >
                    {children}
                </Comp>
            )
        }

        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                onClick={handleClick}
                {...props}
            >
                <span className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent hidden", neon && "block")} />
                {children}
                <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent hidden", neon && "block")} />
            </button>
        );
    }
)

NeonButton.displayName = 'NeonButton';

export { NeonButton, buttonVariants };
