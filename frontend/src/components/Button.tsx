interface ButtonProps {
  disabled?: boolean;
}

export const Button = ({ disabled = false }: ButtonProps) => {
  return (
    <button type="submit" disabled={disabled}>
      Enviar
    </button>
  );
};
