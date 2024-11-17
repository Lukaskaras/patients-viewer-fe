import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Container } from "./container";
import { Card } from "./card";
import { BasicInfo } from "@/__generated__/graphql";

type Props = {
  basicInfo: BasicInfo;
};

export const BasicInfoCard = ({ basicInfo }: Props) => {
  const { name, age, gender, bloodType } = basicInfo;

  return (
    <Container>
      <Card
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
    </Container>
  );
};
