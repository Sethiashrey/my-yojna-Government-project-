"use client";

import { useState } from "react";
import { tags } from "@/lib/tags";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { TagsDropdownProps } from "@/lib/types";

export default function TagsDropdown({
  selectedTag = "",
  onChange,
}: TagsDropdownProps) {
  const [open, setOpen] = useState(false);
  const selected = selectedTag;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-64 justify-between"
          aria-expanded={open}
        >
          {selected
            ? tags.find((t) => t.value === selected)?.label
            : "Select a tag"}
          <ChevronDown
            className={cn(
              "ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform",
              open && "rotate-180"
            )}
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-64 p-0" align="start">
        <Command>
          <CommandInput placeholder="Search tags..." />
          <CommandList>
            <CommandEmpty>No tag found.</CommandEmpty>
            <CommandGroup>
              {tags.map((tag) => (
                <CommandItem
                  key={tag.value}
                  value={tag.value}
                  onSelect={(currentValue) => {
                    if (onChange) {
                      onChange(currentValue === selected ? "" : currentValue);
                    }
                    setOpen(false);
                  }}
                >
                  {tag.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selected === tag.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
