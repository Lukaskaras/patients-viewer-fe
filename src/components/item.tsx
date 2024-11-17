import { BeakerIcon } from "@heroicons/react/24/solid";

type Props = {
  title: string;
  text: string;
};

export const Item = ({ title, text }: Props) => {
  return (
    <span>
      <strong>{title}:</strong> {text}
    </span>
  );
};
