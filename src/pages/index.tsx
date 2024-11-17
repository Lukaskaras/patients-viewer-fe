import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import Link from "next/link";

const ALL_PATIENTS_QUERY = gql(`
  query getAllPatients {
    allPatients {
      id
      basicInfo {
        name
        age
        gender
      }
    }
  }
`);

export default function Home() {
  const { loading, error, data } = useQuery(ALL_PATIENTS_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error || !data?.allPatients) return <p>Something went wrong</p>;

  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold py-8 text-center">List of patients</h2>
      <div className="flex flex-col gap-4">
        {data.allPatients.map((patient) => (
          <Link href={`/${patient.id}`} className="text-xl">
            <div className="p-4 bg-white rounded-lg drop-shadow-md max-h-max hover:drop-shadow-lg ">
              {patient?.basicInfo.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
