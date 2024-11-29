import { cn } from "../../lib/utils";

interface MaxWidthWrapperProps
  extends Partial<React.HTMLAttributes<HTMLDivElement>> {
  large?: boolean;
}

export default function MaxWidthWrapper({
  className,
  children,
  large = false,
  ...props
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(large ? "max-w-screen-2xl" : "max-w-7xl", className)}
      {...props}
    >
      {children}
    </div>
  );
}
