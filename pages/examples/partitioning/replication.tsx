export default function Replication() {
  return (
    <main className="bg-black text-gray-300 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        Types of partitioning
        </div>
      </div>
      <div className="fixed left-5 flex flex-col h-48 w-full items-start justify-center p-64">
        <p className="border-b border-white">Replication</p>
        <div className="flex flex-col">
          <div className="read w-20 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top left-72" ><p>User 1</p><p>User 2</p><p>...</p></div>
          <div className="read w-20 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top left-72 opacity-0" >spacer</div>
          <div className="read w-20 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top left-72" ><p>User 1</p><p>User 2</p><p>...</p></div>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full justify-end flex-wrap  bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none font-mono">
        <a href="/examples/partitioning/sharding_with_replication" >
        Sharding with Replication
        </a></div>
      </div>
    </main>
  )
}
