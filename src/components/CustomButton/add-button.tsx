type ButtonProps = {
  text: string;
};

export const AddButton = ({ text }: ButtonProps) => {
  return (
      <button>{text}</button>
  );
};
