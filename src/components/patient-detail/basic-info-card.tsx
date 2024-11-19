import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Card } from "./card";
import { CardInner } from "./card-inner";
import { BasicInfo } from "@/__generated__/graphql";

type Props = {
  basicInfo: BasicInfo;
};

export const BasicInfoCard = ({ basicInfo }: Props) => {
  const { name, age, gender, bloodType } = basicInfo;

  return (
    <Card>
      <CardInner
        icon={<UserCircleIcon className="w-8 h-8 text-teal-400" />}
        heading="Patient information"
        rows={[
          { title: "Name", text: name },
          { title: "Age", text: age.toString() },
          { title: "Gender", text: gender },
          {
            title: "Blood type",
            text: bloodType || "Unknown",
          },
        ]}
      />
    </Card>
  );
};
