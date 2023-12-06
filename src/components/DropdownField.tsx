import React from "react";

interface DropdownFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4 p-4 border rounded-lg w-full">
      <label className="block mb-2 text-gray-800">{label}:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 w-full rounded-lg pr-2"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownField;
