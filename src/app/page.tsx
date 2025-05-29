import { UIButton } from "@/src/shared/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-3xl font-mono">Welcome to the cats management service</h1>
      <div className="mt-3 flex gap-5">
        <UIButton isGradient={true} asLink={true} href="/cats/" color="purple">Manage cats</UIButton>
        <UIButton isGradient={true} asLink={true} href="/cats/create" color="teal">Add cat</UIButton>
      </div>
    </div>
  );
}
