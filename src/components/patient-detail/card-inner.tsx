import React from "react";
import { Item } from "./item";

type Props = {
  rows: { title: string; text: string }[];
  heading: string;
  icon: React.ReactNode;
};

export const CardInner = ({ rows, heading, icon }: Props) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-2xl font-bold">{heading}</h3>
      </div>
      {rows.map((row) => (
        <Item key={row.title} title={row.title} text={row.text} />
      ))}
    </div>
  );
};
