import { CardTabber } from "@/components/definition_card/card_tabber";
import { terms } from "@/lib/terms";

export function generateStaticParams() {
  return terms.map((term) => ({
    name: term.name,
  }));
}

export default async function TabsDemo({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <>
      <CardTabber term={name} />
    </>
  );
}
