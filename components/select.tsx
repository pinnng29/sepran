"use client";

import { useMemo } from "react";
import { SingleValue } from "react-select";
import CreateableSelect from "react-select/creatable";

import { useTheme } from "next-themes";

type Props = {
  onChange: (value?: string) => void;
  onCreate?: (value: string) => void;
  options?: { label: string; value: string }[];
  value?: string | null | undefined;
  disabled?: boolean;
  placeholder?: string;
};

export default function Select({
  onChange,
  onCreate,
  options = [],
  value,
  disabled,
  placeholder,
}: Props) {
  const { theme } = useTheme();

  const onSelect = (options: SingleValue<{ label: string; value: string }>) => {
    onChange(options?.value);
  };

  const formattedValue = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [options, value]);

  return (
    <CreateableSelect
      placeholder={placeholder}
      value={formattedValue}
      onChange={onSelect}
      options={options}
      onCreateOption={onCreate}
      isDisabled={disabled}
      className="text-sm h-10 w-[180px]"
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: theme === "dark" ? "#020817" : "#FFFFFF",
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: theme === "dark" ? "#020817" : "#FFFFFF",
          border: "1px solid #1e293b",
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? "#3b82f6"
            : state.isFocused
            ? "#3b82f6"
            : "transparent",
        }),
        singleValue: (base) => ({
          ...base,
          color: theme === "dark" ? "#FFFFFF" : "#020817",
        }),
      }}
    />
  );
}
