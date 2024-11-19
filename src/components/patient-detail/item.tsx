type Props = {
  title: string;
  text: string;
};

export const Item = ({ title, text }: Props) => {
  return (
    <span className="text-secondary">
      <strong>{title}:</strong> <span>{text}</span>
    </span>
  );
};
