import Image from "next/image";
import { Container } from "@/components/container";
import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__/gql";
import { BasicInfoCard } from "@/components/basic-info-card";
import { MedicalHistoryCard } from "@/components/medical-history-card";
import { RecentVitalsCard } from "@/components/recent-vitals-card";

const QUERY = gql(`
  query getPatient {
    patient {
      basicInfo {
        name
        age
        gender
        bloodType
      }
      medicalHistory {
        allergies
        chronicConditions
        currentMedications
      }
      recentVitals {
        bloodPressure
        heartRate
        temperature
      }
    }
  }
`);

export default function Home() {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;

  if (error || !data?.patient) return <p>Something went wrong</p>;

  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_400px)_1fr] gap-4">
        <div className="flex flex-col gap-4">
          <BasicInfoCard basicInfo={data.patient.basicInfo} />
          <MedicalHistoryCard medicalHistory={data.patient.medicalHistory} />
          <RecentVitalsCard recentVitals={data.patient.recentVitals} />
        </div>
        <Container>
          <div className="flex justify-center min-h-96 min-w-96">
            <Image src="/brain.png" alt="brain" width={600} height={600} />
          </div>
        </Container>
      </div>
    </div>
  );
}
