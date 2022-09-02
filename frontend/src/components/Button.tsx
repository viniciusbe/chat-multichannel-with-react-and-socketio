interface ButtonProps {
  disabled?: boolean;
  text?: string;
}

export const Button = ({ disabled = false, text = "Enviar" }: ButtonProps) => {
  return (
    <button className="btn btn-primary ml-10" type="submit" disabled={disabled}>
      {text}
    </button>
  );
};
