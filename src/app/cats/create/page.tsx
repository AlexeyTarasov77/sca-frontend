import { AddCatForm } from "@/src/features/add-cat";

export default function Page() {
  return (<div className="flex items-center justify-center min-h-screen">
    <div className="bg-gray-800 px-28 py-28 w-1/3">
      <AddCatForm />
    </div>
  </div>)
}
