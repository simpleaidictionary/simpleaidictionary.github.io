import { cn } from "@/lib/utils";

export function DefinitionExample({
  className,
  example,
  ...props
}: React.ComponentProps<"p"> & { example: string }) {
  return (
    <p className={cn(className, "mt-2")} {...props}>
      {example}
    </p>
  );
}
