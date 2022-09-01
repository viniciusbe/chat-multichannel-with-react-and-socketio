interface ButtonProps {
  disabled?: boolean;
  text?: string;
}

export const Button = ({ disabled = false, text = "Enviar" }: ButtonProps) => {
  return (
    <button type="submit" disabled={disabled} style={{ margin: "0 0 0 8px" }}>
      {text}
    </button>
  );
};
