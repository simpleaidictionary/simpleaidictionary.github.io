import { CardTabber } from "@/components/definition_card/card_tabber";
import { getOutputTerms, getOutputTerm } from "@/lib/terms";

export function generateStaticParams() {
  return getOutputTerms().map((outputTerm) => {
    return {
      url: outputTerm.url,
    };
  });
}

export default async function TermPage({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const { url } = await params;
  const outputTerm = getOutputTerm(url)!;

  return (
    <>
      <CardTabber outputTerm={outputTerm} />
    </>
  );
}
