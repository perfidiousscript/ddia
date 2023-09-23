export default function ReadAfterWriteConsistency() {
  return (
    <main className="bg-black text-gray-300 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        "Read After Write Consistency"/"Read Your Writes"
        </div>
      </div>
      <div className="fixed left-5 flex flex-col h-48 w-full items-start justify-center p-64">
        <p>A guarantee the writing user that their write will be readable immediately.</p>
        <p>(We make no guarantees to other users...)</p>
        <br/>
        <ul>
          <li>Normally read from a follower EXCEPT after a write, then read that information from the leader.</li>
          <li>If writes are common, then read all information from the leader for some span (~60seconds) after a write.</li>
          <li>Read from followers whose update timestamp is later than the last read.</li>
        </ul>
        <div className="fixed bottom-0 left-0 flex h-48 w-full justify-end flex-wrap  bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none font-mono">
        <a href="/examples/read_after_write/rawc_example" >
        Demonstrating Read Your Writes...
        </a></div>
      </div>
    </main>
  )
}
