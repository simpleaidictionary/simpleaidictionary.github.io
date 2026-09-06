import { OutputTerm, TermType } from "@/lib/terms";
import { BaseCard } from "@/components/definition_card/base_card";
import { DefintionHeader } from "./defintion_header";
import { DefinitionContent } from "./definition_content";
import { DefinitionDiagram } from "./definition_diagram";
import clsx from "clsx";

export function DefinitionCard({
  outputTerm,
  termType,
}: {
  outputTerm: OutputTerm;
  termType: TermType;
}) {
  return (
    <BaseCard>
      <div className="flex flex-col @md:flex-row items-center">
        <div
          className={clsx({
            "@md:w-6/10": outputTerm[termType].diagram !== undefined,
          })}
        >
          <DefintionHeader outputTerm={outputTerm} termType={termType} />
          <DefinitionContent outputTerm={outputTerm} termType={termType} />
        </div>
        {outputTerm[termType].diagram !== undefined && (
          <DefinitionDiagram
            className="mt-5 @md:mt-0 @md:w-4/10"
            diagram={outputTerm[termType].diagram}
          />
        )}
      </div>
    </BaseCard>
  );
}
