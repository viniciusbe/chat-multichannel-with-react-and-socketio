interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      style={{ flexGrow: 1, margin: 0 }}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
