import Image from "next/image";
import { Card } from "@/components/patient-detail/card";
import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__/gql";
import { BasicInfoCard } from "@/components/patient-detail/basic-info-card";
import { MedicalHistoryCard } from "@/components/patient-detail/medical-history-card";
import { RecentVitalsCard } from "@/components/patient-detail/recent-vitals-card";
import { useRouter } from "next/router";
import { BackToHomeLink } from "@/components/patient-detail/back-to-home-link";

const PATIENT_QUERY = gql(`
  query getPatient($id: ID!) {
    patient(id: $id) {
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

export default function PatientDetail() {
  const { query } = useRouter();
  const { loading, error, data } = useQuery(PATIENT_QUERY, {
    variables: { id: query.id as string },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong</p>;

  if (!data?.patient) return <p>No data</p>;

  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <BackToHomeLink />
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_400px)_1fr] gap-4 py-4">
        <div className="flex flex-col gap-4">
          <BasicInfoCard basicInfo={data.patient.basicInfo} />
          <MedicalHistoryCard medicalHistory={data.patient.medicalHistory} />
          <RecentVitalsCard recentVitals={data.patient.recentVitals} />
        </div>
        <Card>
          <div className="flex justify-center min-h-96 min-w-96">
            <Image src="/brain.png" alt="brain" width={700} height={700} />
          </div>
        </Card>
      </div>
    </div>
  );
}
