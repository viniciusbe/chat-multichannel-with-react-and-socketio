interface ButtonProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  disabled = false,
  children = "Send",
}: ButtonProps) => {
  return (
    <button className="btn btn-primary ml-10" type="submit" disabled={disabled}>
      {children}
    </button>
  );
};
