import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const BackToHomeLink = () => {
  return (
    <Link href="/" className="text-teal-400 hover:text-teal-500 py-4">
      <div className="flex items-center gap-2">
        <ArrowLeftIcon className="w-6 h-6" />
        <p>Back to list of patients</p>
      </div>
    </Link>
  );
};
