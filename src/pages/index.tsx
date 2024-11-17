import Image from "next/image";
import { Container } from "@/components/container";
import {
  ClipboardDocumentListIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/card";
import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__/gql";

const QUERY = gql(`
  query getPatient {
    patient {
      basicInfo {
        name
        age
        gender
        bloodType
      }
    }
  }
`);

export default function Home() {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;

  if (error || !data?.patient) return <p>Something went wrong</p>;

  return (
    <div className="grid grid-cols-[minmax(0,_400px)_1fr] gap-4 p-4">
      <div className="flex flex-col gap-4">
        <Container>
          <Card
            icon={<UserCircleIcon className="w-8 h-8 text-gray-500" />}
            heading="Patient information"
            rows={[
              { title: "Name", text: data.patient.basicInfo.name },
              { title: "Age", text: data.patient.basicInfo.age.toString() },
              { title: "Gender", text: data.patient.basicInfo.gender },
              {
                title: "Blood type",
                text: data.patient.basicInfo.bloodType || "Unknown",
              },
            ]}
          />
        </Container>
        <Container>
          <Card
            icon={
              <ClipboardDocumentListIcon className="w-8 h-8 text-gray-500" />
            }
            heading="Medical history"
            rows={[
              { title: "Allergies", text: "Penicillin" },
              { title: "Diabetes", text: "No" },
              { title: "Hypertension", text: "No" },
            ]}
          />
        </Container>
        <Container>
          <Card
            icon={<HeartIcon className="w-8 h-8 text-gray-500" />}
            heading="Recent vitals"
            rows={[
              { title: "Systolic", text: "120" },
              { title: "Diastolic", text: "80" },
              { title: "Pulse", text: "80" },
            ]}
          />
        </Container>
      </div>
      <Container>
        <div className="flex justify-center min-h-96 min-w-96">
          <Image src="/brain.png" alt="brain" width={600} height={600} />
        </div>
      </Container>
    </div>
  );
}
