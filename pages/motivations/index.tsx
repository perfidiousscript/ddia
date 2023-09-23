export default function Motivations() {
  return (
    <main className="bg-black text-gray-300 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        Some Motivations for multi-node systems
        </div>
      </div>
      <div className="fixed left-5 flex flex-col h-48 w-full items-start justify-center p-64">
        <p>For loads that exceed hardware capabilities.</p>
        <p>Supercomputers are extremely expensive (and cannot be scaled) while multiple commodity machines tend to be cheap (and scalable).</p>
        <p>Distributing machines allows reduced latency for users in different areas.</p>
        <p>Replication provides resilience to failiure and can offer reduced latency to high use nodes.</p>
      </div>
    </main>
  )
}
