import { HeartIcon } from "@heroicons/react/24/solid";
import { Container } from "./container";
import { Card } from "./card";
import { RecentVitals } from "@/__generated__/graphql";

type Props = {
  recentVitals: RecentVitals;
};

export const RecentVitalsCard = ({ recentVitals }: Props) => {
  const { bloodPressure, heartRate, temperature } = recentVitals;

  return (
    <Container>
      <Card
        icon={<HeartIcon className="w-8 h-8 text-teal-400" />}
        heading="Recent vitals"
        rows={[
          { title: "Blood pressure", text: bloodPressure },
          { title: "Heart rate", text: heartRate.toString() },
          { title: "Temperature", text: temperature.toString() },
        ]}
      />
    </Container>
  );
};
