"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-2xl">RTwo Content</h1>
      <button
        className="rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-700"
        type="button"
        onClick={() => router.push("/")}
      >
        Back to Home (Client Component router.push)
      </button>
    </div>
  );
}
