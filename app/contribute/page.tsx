import { ProseH1 } from "@/components/prose/ProseHeaders";
import { ProseP } from "@/components/prose/ProseP";
import Link from "next/link";

export default function Contribute() {
  return (
    <div>
      <ProseH1 className="text-left">How to Contribute?</ProseH1>
      <ProseP className="text-left">
        As an open source project, The Simple AI Dictionary is always looking
        for contributors!
      </ProseP>
      <ProseP className="text-left ">
        Whether that&apos;s contributing a new definition, critiquing an
        existing one or even suggesting some stylistic changes, all valued
        contributions are welcome through the{" "}
        <Link
          href="https://github.com/simpleaidictionary/simpleaidictionary.github.io"
          className="underline decoration-2"
          target="_blank"
        >
          GitHub Repository
        </Link>
      </ProseP>
    </div>
  );
}
