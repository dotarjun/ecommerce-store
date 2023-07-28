"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/shad-button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Category } from "@/types";

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ];

interface ComboboxProps {
  data: Category[];
}

export const Combobox: React.FC<ComboboxProps> = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between">
          {value
            ? data.find((category: Category) => category.name === value)?.name
            : "Select Category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {data.map((category: Category) => (
              <CommandItem
                key={category.name}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
