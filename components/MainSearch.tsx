"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getOutputTerms } from "@/lib/terms";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { useRef } from "react";

export function MainSearch() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string | undefined>("");
  const expandedTerms = [];
  for (const outputTerm of getOutputTerms()) {
    expandedTerms.push({ name: outputTerm.name, url: outputTerm.url });
    for (const related of outputTerm.related_terms) {
      expandedTerms.push({ name: related, url: outputTerm.url });
    }
  }
  return (
    <div className="mt-4 border border-border rounded-full shadow-md">
      <Combobox
        items={expandedTerms}
        autoHighlight
        openOnInputClick={false}
        limit={5}
        inputValue={inputValue}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onInputValueChange={(inputValue, e) => setInputValue(inputValue)}
      >
        <ComboboxInput
          ref={inputRef}
          placeholder="Search the buzz..."
          showTrigger={false}
          showClear
          className="bg-white"
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem
                key={item.name}
                value={item.name}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onClick={(e) => {
                  router.push(`/term/${item.url}`);
                  inputRef.current?.blur();
                }}
                className="cursor-pointer"
              >
                {item.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
