type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const AddButton = ({ text }: ButtonProps) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
};
