import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { Card } from "./card";
import { CardInner } from "./card-inner";
import { MedicalHistory } from "@/__generated__/graphql";

type Props = {
  medicalHistory: MedicalHistory;
};

export const MedicalHistoryCard = ({ medicalHistory }: Props) => {
  const { allergies, chronicConditions, currentMedications } = medicalHistory;

  return (
    <Card>
      <CardInner
        icon={<ClipboardDocumentListIcon className="w-8 h-8 text-teal-400" />}
        heading="Medical history"
        rows={[
          { title: "Allergies", text: allergies.join(", ") },
          { title: "Chronic conditions", text: chronicConditions.join(", ") },
          { title: "Current medications", text: currentMedications.join(", ") },
        ]}
      />
    </Card>
  );
};
