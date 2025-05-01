type HeaderProps = {
  title: string;
};
export const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
