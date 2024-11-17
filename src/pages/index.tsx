import Image from "next/image";
import localFont from "next/font/local";
import { Container } from "@/components/container";
import { Item } from "@/components/item";
import {
  ClipboardDocumentListIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@/components/card";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="grid grid-cols-[minmax(0,_400px)_1fr] gap-4 p-4">
      <div className="flex flex-col gap-4">
        <Container>
          <Card
            icon={<UserCircleIcon className="w-8 h-8 text-gray-500" />}
            heading="Patient information"
            rows={[
              { title: "Name", text: "John Doe" },
              { title: "Age", text: "25" },
              { title: "Gender", text: "Male" },
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
          <Image src="/brain.png" alt="brain" width={800} height={800} />
        </div>
      </Container>
    </div>
  );
}
