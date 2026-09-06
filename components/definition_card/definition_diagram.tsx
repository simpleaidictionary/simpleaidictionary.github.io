import { Diagram } from "@/lib/terms";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MermaidClient } from "@/components/definition_card/MermaidClient";
import { readFileSync } from "fs";

export function DefinitionDiagram({
  diagram,
  className,
  ...props
}: { diagram: Diagram } & React.ComponentProps<"img">) {
  let diagramImage;
  if (process.env.NODE_ENV == "development") {
    diagramImage = (
      <MermaidClient
        diagramSrcCode={readFileSync(
          process.cwd() + "/public/mermaid_diagrams/" + diagram.src + ".mmd",
          "utf-8"
        )}
      />
    );
  } else if (process.env.NODE_ENV == "production") {
    diagramImage = (
      <Image
        {...props}
        src={`${process.env.NEXT_PUBLIC_BASEPATH}/mermaid_diagrams/${diagram.src}.svg`}
        alt={diagram.alt}
        width="100"
        height="100"
      />
    );
  }
  return <div className={cn(className, "*:w-full")}>{diagramImage}</div>;
}
