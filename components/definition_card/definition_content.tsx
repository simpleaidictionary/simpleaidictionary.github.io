import { CardContent } from "@/components/ui/card";
import { diagram, definition_field } from "@/lib/terms";
import { DefinitionExample } from "@/components/definition_card/definition_example";

export function DefinitionContent({
  definition,
  example,
}: {
  children?: Readonly<React.ReactNode>;
  definition: definition_field["definition"];
  example: definition_field["example"];
  diagram?: diagram;
}) {
  return (
    <CardContent className="text-sm text-muted-foreground flex gap-2 flex-col text-center @md:text-left md:justify-start justify-center">
      <p className="text-black">{definition}</p>
      <DefinitionExample example={example} />
    </CardContent>
  );
}
