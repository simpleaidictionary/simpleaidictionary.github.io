import Link from "next/link";
import { getOutputTerms } from "@/lib/terms";
import { term_of_the_day } from "@/lib/term_of_the_day";
import { DefinitionCard } from "@/components/definition_card/definition_card";
import { Card } from "@/components/ui/card";

export default function Home() {
  const bufferLst = [];

  for (let i = 0; i < 2; i++) {
    bufferLst.push(<li key={i}></li>);
  }
  return (
    <>
      <main className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center mt-8">
        <article className="grow">
          <h1 className="px-8 text-2xl text-primary mb-3 text-center font-playfair-display ">
            Today&apos;s &nbsp;
            <span>Buzzword</span>
          </h1>
          <DefinitionCard
            outputTerm={getOutputTerms().find(
              (term) => term.name === term_of_the_day
            )!}
            termType="general"
          />
        </article>
        <article className=" flex items-center flex-col">
          <h1 className="text-center px-4 text-2xl text-primary mb-2 font-playfair-display">
            Discover
          </h1>
          <Card className="border border-border p-1 px-4 bg-secondary basis-56 ">
            <div className="overflow-scroll scroll-fade h-full">
              <ul className="list-none grid grid-cols-1 grid-flow-row px-2 gap-2 gap-x-8 text-base">
                {bufferLst}
                {getOutputTerms()
                  .slice(0, 12)
                  .map((term) => (
                    <li className="text-center" key={term.name}>
                      <Link
                        className="capitalize text-primary  hover:underline decoration-2 "
                        href={`/term/${term.url}`}
                      >
                        {term.name}
                      </Link>
                    </li>
                  ))}
                {bufferLst}
              </ul>
            </div>
          </Card>
        </article>
      </main>
    </>
  );
}
