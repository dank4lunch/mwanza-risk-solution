import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const movingButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl hover:shadow-blue-500/50 transform-gpu perspective-1000 hover:rotate-y-12 hover:rotate-x-6 hover:scale-110 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/30 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 before:skew-x-12",
        glowing: "bg-gradient-to-r from-white via-blue-400 to-blue-600 text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 animate-pulse hover:animate-none hover:scale-110 hover:rotate-3 active:scale-95 before:absolute before:inset-0 before:bg-gradient-conic before:from-white/20 before:via-transparent before:to-blue-600/20 before:animate-spin before:duration-2000",
        neon: "bg-black border-2 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/80 hover:bg-cyan-400/10 hover:scale-105 hover:rotate-1 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400/0 before:via-cyan-400/20 before:to-cyan-400/0 before:translate-y-[-100%] hover:before:translate-y-[100%] before:transition-transform before:duration-600",
        rainbow: "bg-gradient-to-r from-white via-blue-400 via-blue-500 via-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl hover:shadow-blue-500/50 animate-gradient-x hover:scale-110 hover:rotate-y-6 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-45 before:from-white/0 before:via-white/40 before:to-white/0 before:translate-x-[-100%] before:translate-y-[-100%] hover:before:translate-x-[100%] hover:before:translate-y-[100%] before:transition-transform before:duration-800",
        floating: "bg-gradient-to-tr from-blue-400 via-blue-500 to-blue-600 text-white shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 animate-float hover:animate-none hover:scale-110 hover:rotate-y-12 active:scale-95",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        default: "h-12 px-8 py-3 text-base",
        lg: "h-16 px-12 py-4 text-lg font-semibold",
        xl: "h-20 px-16 py-5 text-xl font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface MovingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof movingButtonVariants> {
  asChild?: boolean;
}

const MovingButton = React.forwardRef<HTMLButtonElement, MovingButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return (
        <div className="relative inline-block">
          <Slot
            className={cn(movingButtonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          >
            {children}
          </Slot>

          {/* 3D shadow effect */}
          <div className={cn(
            "absolute inset-0 rounded-2xl transition-all duration-500 -z-10",
            variant === "primary" && "bg-gradient-to-br from-blue-600/50 via-blue-700/50 to-blue-800/50 blur-lg group-hover:blur-xl",
            variant === "glowing" && "bg-gradient-to-r from-white/50 via-blue-500/50 to-blue-700/50 blur-lg",
            variant === "neon" && "bg-cyan-400/30 blur-lg",
            variant === "rainbow" && "bg-gradient-to-r from-white/50 via-blue-500/50 via-blue-600/50 via-blue-700/50 via-blue-800/50 to-blue-900/50 blur-lg",
            variant === "floating" && "bg-gradient-to-tr from-blue-500/50 via-blue-600/50 to-blue-700/50 blur-lg"
          )} style={{
            transform: "translateY(4px) translateZ(-10px)",
          }}></div>
        </div>
      );
    }

    return (
      <div className="relative inline-block">
        <button
          className={cn(movingButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>

          {/* Animated particles for glowing effect */}
          {variant === "glowing" && (
            <div className="absolute inset-0 rounded-2xl opacity-30">
              <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute top-4 right-3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-3 left-4 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-700"></div>
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
            </div>
          )}

          {/* Ripple effect for primary */}
          {variant === "primary" && (
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent rounded-2xl animate-ping"></div>
            </div>
          )}
        </button>

        {/* 3D shadow effect */}
        <div className={cn(
          "absolute inset-0 rounded-2xl transition-all duration-500 -z-10",
          variant === "primary" && "bg-gradient-to-br from-blue-600/50 via-purple-600/50 to-pink-600/50 blur-lg group-hover:blur-xl",
          variant === "glowing" && "bg-gradient-to-r from-cyan-500/50 via-blue-600/50 to-purple-700/50 blur-lg",
          variant === "neon" && "bg-cyan-400/30 blur-lg",
          variant === "rainbow" && "bg-gradient-to-r from-red-600/50 via-yellow-600/50 via-green-600/50 via-blue-600/50 via-indigo-600/50 to-purple-600/50 blur-lg",
          variant === "floating" && "bg-gradient-to-tr from-purple-500/50 via-pink-600/50 to-red-600/50 blur-lg"
        )} style={{
          transform: "translateY(4px) translateZ(-10px)",
        }}></div>
      </div>
    );
  }
);

MovingButton.displayName = "MovingButton";

export { MovingButton, movingButtonVariants };
