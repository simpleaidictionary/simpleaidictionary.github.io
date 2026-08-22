import { ProseH1, ProseH2, ProseH3 } from "@/components/prose/ProseHeaders";
import { ProseOL, ProseUL } from "@/components/prose/ProseLists";
import { ProseP } from "@/components/prose/ProseP";

export default function About() {
  return (
    <div>
      <ProseH1 className="text-left">Why the Dictionary?</ProseH1>
      <ProseP className="text-left">
        GenAI is a liminal space. It&apos;s changing rapidly. As a result, new
        terms are continuously being added.
      </ProseP>
      <ProseH2>The Problem</ProseH2>
      <ProseP>
        Understanding new AI &quot;buzzwords&quot; is not always an easy task.
        Definitions can be too abstract and fail to describe how these terms are
        actually being used.
      </ProseP>
      <ProseH3>Example</ProseH3>
      <ProseP className="italic">What is an AI agent?</ProseP>
      <ProseP>
        When we use the term &apos;agent&apos;, we typically refer to apps like
        customer service chat-bots or coding agents.
      </ProseP>
      <ProseP>
        IBM defines it as: &quot;a system that autonomously performs tasks by
        designing workflows with available tools.&quot;
      </ProseP>
      <ProseUL>
        <li>
          The word &quot;system&quot; is too generic. Agents usually refer to an
          app.
        </li>
        <li>
          Agents are not always autonomous; human-in-the-loop and user-feedback
          are popular ways of ensuring agents are safely executing tasks.
        </li>
        <li>
          Agents don&apos;t always design workflows. Some apps use orchestration
          graphs to make LLM models perform single, specific tasks. Even when
          agents design workflows, it might be a sub-flow within a larger,
          developer-designed workflow.
        </li>
        <li>
          The phrase &quot;with available tools&quot; is too technical relative
          to the rest of the definition. Someone who doesn&apos;t know what an
          &quot;agent&quot; is will probably not understand that
          &quot;tools&quot; refers to programming functions that provide
          additional context or computations.
        </li>
      </ProseUL>
      Overall, the definition doesn&apos;t provide you with a concrete picture
      of what an agent is.
      <ProseH2>A Solution</ProseH2>
      <ProseP>
        A dictionary that simply and concretely defines AI terms. To do so, the
        dictionary will do the following:
      </ProseP>
      <ProseOL>
        <li>
          Provide a &quot;term type&quot; for each term. Similar to word types
          in traditional dictionaries, a &quot;term type&quot; will describe
          what the term refers to. Examples include: architecture, document
          format, protocol, and behavior.
        </li>
        <li>
          Provide &quot;related terms&quot; for each term. This is also similar
          to conjugations/derivations in traditional dictionaries, and it helps
          route users to the root term. For example, some of the related terms
          to &quot;agent&quot; are agents and agentic.
        </li>
        <li>
          A simple set of definitions that defines terms as they&apos;re
          commonly used. To do so, the dictionary will provide users with
          different definitions depending on their background.
        </li>
        <li>
          A diagram! A picture is worth a thousand words, and this dictionary is
          planning on using diagrams to convey the various elements associated
          with a term.
        </li>
        <li>
          Finally, there should be informative examples of the term currently in
          use. This helps ground the definition in further context and improve
          the dictionary&apos;s authority in defining AI buzzwords.
        </li>
      </ProseOL>
      <ProseH3>Laying out the Definitions</ProseH3>
      <ProseP>
        So, what are the different definitions that will be offered, and why?
      </ProseP>
      <ProseUL>
        <li>
          First, there should be a general definition that is understood by the
          average professional. It should be as independent as possible, without
          relying on further buzzwords. This definition is the core artifact of
          The Simple AI Dictionary, so it&apos;s meant to be very accessible.
        </li>
        <li>
          There should also be a software definition that is understood by the
          average technical professional. This definition can rely on other
          buzzwords, as it&apos;s meant for professionals with existing
          familiarity of the GenAI space. It should also follow the general
          definition as closely as possible, functioning as the &quot;level
          2&quot; in terms of technical jargon.
        </li>
      </ProseUL>
    </div>
  );
}
