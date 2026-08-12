import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DefinitionCard } from "@/components/definition_card/definition_card";

export function CardTabber({ term }: { term: string }) {
  return (
    <Tabs defaultValue="overview" className="mt-8">
      <div className="flex md:justify-start justify-center ">
        <TabsList>
          <TabsTrigger value="simple">Simple</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="simple">
        <DefinitionCard term={term} termType="simple" />
      </TabsContent>
      <TabsContent value="software">
        <DefinitionCard term={term} termType="software" />
      </TabsContent>
    </Tabs>
  );
}
