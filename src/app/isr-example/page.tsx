// Example ISR page – shows current UTC time and revalidates every 10 minutes
export const revalidate = 600

export default function ISRExamplePage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-gray-900">ISR Example</h1>
        <p className="text-lg text-gray-600">
          This page uses Incremental Static Regeneration and updates every 10 minutes.
        </p>
        <div className="text-xl font-semibold text-[#5e2cb6]">
          Build time (UTC): {new Date().toISOString()}
        </div>
      </div>
    </main>
  )
}


