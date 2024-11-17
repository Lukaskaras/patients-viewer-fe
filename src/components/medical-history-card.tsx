import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { Container } from "./container";
import { Card } from "./card";
import { MedicalHistory } from "@/__generated__/graphql";

type Props = {
  medicalHistory: MedicalHistory;
};

export const MedicalHistoryCard = ({ medicalHistory }: Props) => {
  const { allergies, chronicConditions, currentMedications } = medicalHistory;

  return (
    <Container>
      <Card
        icon={<ClipboardDocumentListIcon className="w-8 h-8 text-gray-500" />}
        heading="Medical history"
        rows={[
          { title: "Allergies", text: allergies.join(", ") },
          { title: "Chronic conditions", text: chronicConditions.join(", ") },
          { title: "Current medications", text: currentMedications.join(", ") },
        ]}
      />
    </Container>
  );
};
