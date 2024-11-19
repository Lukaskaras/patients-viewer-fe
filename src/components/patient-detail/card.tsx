type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg drop-shadow-md max-h-max">
      {children}
    </div>
  );
};
