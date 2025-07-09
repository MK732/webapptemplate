import { TestDataDisplay } from "@/components/test-data-display";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <TestDataDisplay />
      </div>
    </main>
  );
}
