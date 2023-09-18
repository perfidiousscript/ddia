export default function ReadAfterWrite() {
  return (
    <main className="bg-black text-gray-300 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        Reading your own writes and Going Back In Time
        </div>
      </div>
      <div className="fixed left-5 flex flex-col h-48 w-full items-start justify-center p-64">
        <p>Since reads are far more common than writes a common pattern is to have all writes go to a single node (the leader) then to have these writes writtten in turn to follower nodes.</p>
        <p>Users can then read from a follower node, often a node that is physically close to their location for low latency.</p>
        <p>BUT When dbs follows a write-to-leader/read-from-follower model strange things can happen...</p>
        <br/>
        <div className="fixed bottom-0 left-0 flex h-48 w-full justify-end flex-wrap  bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none font-mono">
        <a href="/examples/read_after_write/user" >
        Strange things...
        </a></div>
      </div>
    </main>
  )
}
