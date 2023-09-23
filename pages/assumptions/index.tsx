export default function Assumptions() {
  return (
    <main className="bg-black text-gray-300 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        Assumptions of multi-node systems
        </div>
      </div>
      <div className="fixed left-5 flex flex-col h-48 w-full items-start justify-center p-64">
        <p>There is no guarantee a message will arrive.</p>
        <p>There is no guarantee a recieving maching will be accepting messages if the message arrives.</p>
        <p>There is no guarantee that two messages will arrive in the order that they are sent.</p>
        <p>It is possible for a message to be sent recieved and acknowledged, but overwritten by another message.</p>
        <p>(Stated another way: It is possible for a message to have no effect or be overwritten).</p>
        <p>(Stated another way: It is possible for state to change between the time your message is sent and its ACK is recieved.).</p>
        <p>There is no guarantee that even if a message is recieved that the sending machine will see an acknowledgement.</p>
      </div>
    </main>
  )
}
