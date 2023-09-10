"use client";

import ReactSelect from "react-select";

interface SelectValueProps {
  value: string;
  label: string;
}

interface SelectProps {
  placeholder: string;
  data: SelectValueProps[];
  value: SelectValueProps | null;
  onChange: (value: SelectValueProps) => void;
}

export function Select({ placeholder, data, onChange, value }: SelectProps) {
  return (
    <ReactSelect
      options={data}
      placeholder={placeholder}
      isClearable
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
        option: (styles, { isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isFocused
              ? "#2C2C2C"
              : isSelected
              ? "#1E1E1E"
              : "transparent",
            color: isFocused ? "#FFF" : isSelected ? "#FFF" : "#2C2C2C",
          };
        },
        menu: (styles) => ({
          ...styles,
          borderRadius: 16,
          overflow: "hidden",
          minHeight: 120,
        }),
      }}
      value={value}
      onChange={(value) => onChange(value as SelectValueProps)}
      className="w-full"
    />
  );
}
