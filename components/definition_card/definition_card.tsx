import { getTermObj } from "@/lib/terms";
import { BaseCard } from "@/components/definition_card/base_card";
import { DefintionHeader } from "./defintion_header";
import { DefinitionContent } from "./definition_content";
import { DefinitionDiagram } from "./definition_diagram";
import clsx from "clsx";

export function DefinitionCard({
  term,
  termType,
}: {
  term: string;
  termType: string;
}) {
  const retrieved_term = getTermObj(term);
  let termTypeObj = null;
  if (termType == "general") {
    termTypeObj = retrieved_term.general;
  } else {
    termTypeObj = retrieved_term.software;
  }
  return (
    <BaseCard>
      <div className="flex flex-col @md:flex-row items-center">
        <div
          className={clsx({ "@md:w-6/10": termTypeObj.diagram !== undefined })}
        >
          <DefintionHeader
            name={retrieved_term.name}
            type={termTypeObj.type}
            related_terms={retrieved_term.related_terms}
          />
          <DefinitionContent
            definition={termTypeObj.definition}
            example={termTypeObj.example}
          />
        </div>
        {termTypeObj.diagram !== undefined && (
          <DefinitionDiagram
            className="mt-5 @md:mt-0 @md:w-4/10"
            diagram={termTypeObj.diagram}
          />
        )}
      </div>
    </BaseCard>
  );
}
