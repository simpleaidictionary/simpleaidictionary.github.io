import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DefinitionCard } from "@/components/definition_card/definition_card";
import { OutputTerm } from "@/lib/terms";

export function CardTabber({ outputTerm }: { outputTerm: OutputTerm }) {
  return (
    <Tabs defaultValue="overview" className="mt-8">
      <div className="flex md:justify-start justify-center ">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="general">
        <DefinitionCard outputTerm={outputTerm} termType="general" />
      </TabsContent>
      <TabsContent value="software">
        <DefinitionCard outputTerm={outputTerm} termType="software" />
      </TabsContent>
    </Tabs>
  );
}
