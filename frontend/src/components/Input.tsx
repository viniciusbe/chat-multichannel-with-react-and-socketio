interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <input
      style={{ width: "auto" }}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
