import { CardContent } from "@/components/ui/card";
import { OutputTerm, TermType } from "@/lib/terms";
import { DefinitionExample } from "@/components/definition_card/definition_example";

export function DefinitionContent({
  outputTerm,
  termType,
}: {
  children?: Readonly<React.ReactNode>;
  outputTerm: OutputTerm;
  termType: TermType;
}) {
  return (
    <CardContent className="text-sm text-muted-foreground flex gap-2 flex-col text-center @md:text-left md:justify-start justify-center">
      <p className="text-black">{outputTerm[termType].definition}</p>
      <DefinitionExample example={outputTerm[termType].example} />
    </CardContent>
  );
}
