import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { OutputTerm, TermType } from "@/lib/terms";
import Link from "next/link";

export function DefintionHeader({
  outputTerm,
  termType,
}: {
  outputTerm: OutputTerm;
  termType: TermType;
}) {
  return (
    <CardHeader className="mbe-6 gap-0 justify-center text-center @md:text-left @md:justify-start">
      <CardTitle className="capitalize">
        <Link
          className="hover:underline decoration-2"
          href={`/term/${outputTerm.url}`}
        >
          {outputTerm.name}
        </Link>
        <span className="ms-1 text-muted-foreground font-normal">
          - {termType}
        </span>
      </CardTitle>
      <CardDescription className="capitalize">
        Related: {outputTerm.related_terms.join(", ")}
      </CardDescription>
    </CardHeader>
  );
}
