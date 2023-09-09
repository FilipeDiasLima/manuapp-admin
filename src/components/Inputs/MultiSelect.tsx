"use client";

import Select from "react-select";

interface SelectValueProps {
  value: number;
  label: string;
}

interface MultiSelectProps {
  placeholder: string;
  data: SelectValueProps[];
  value: SelectValueProps[] | null;
  onChange: (value: SelectValueProps[]) => void;
}

export function MultiSelect({
  placeholder,
  data,
  onChange,
  value,
}: MultiSelectProps) {
  return (
    <Select
      options={data}
      isMulti
      closeMenuOnSelect={false}
      placeholder={placeholder}
      styles={{
        control: (styles) => ({
          ...styles,
          backgroundColor: "transparent",
          borderRadius: 16,
          padding: 6,
          borderWidth: 2,
          boxShadow: "none",
          borderColor: "#D9D9D9",
          ":hover": {
            borderColor: "#D9D9D9",
          },
        }),
        option: (styles, { isFocused, isSelected }) => ({
          ...styles,
          backgroundColor: isFocused
            ? "#2C2C2C"
            : isSelected
            ? "#1E1E1E"
            : "transparent",
          color: isFocused ? "#FFF" : isSelected ? "#FFF" : "#2C2C2C",
        }),
        menu: (styles) => ({
          ...styles,
          borderRadius: 16,
          overflow: "hidden",
          minHeight: 120,
        }),
      }}
      value={value}
      onChange={(value) => onChange(value as SelectValueProps[])}
    />
  );
}
