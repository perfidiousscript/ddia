import React, { useState, setState } from 'react'

export default function User() {
  const [status, setStatus] = useState('ready')
  const [message, setMessage] = useState('')

  function handleWrite() {
    setStatus('[Writing to db]')
    setTimeout(()=>{
      setStatus('INSERT INTO messages (content) VALUES ("Hello!")')
    }, 1000)
    setTimeout(()=>{
      setStatus('[db write complete!]')
    }, 2000)
  }

  function handleRead() {
    setStatus('[Reading messages from db]')
    setTimeout(()=>{
      setStatus('SELECT content FROM messages')
    }, 1000)
    setTimeout(()=>{
      setStatus('No Result')
      setMessage('null')
    }, 2000)
  }


  return (
    <main className="bg-black text-gray-300 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          What the Reader Sees
        </div>
      </div>
      <div className="fixed left-5 flex flex-col h-48 w-full items-start justify-center p-64">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Status: {status}
        </div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex justify-center">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col align-center leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">Messages</div>
              <p className="text-gray-700 text-base">{message}</p>
            </div>
          </div>
        </div>
        <br />
        <div className="w-full inline-flex justify-evenly">
        <button id="write-message" className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleWrite}>
          Write Message 'Hello!'
        </button>
        <br />
        <button id="write-message" className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRead}>
          Read Messages!
        </button>
        </div>
        <br />
        <div className="fixed bottom-0 left-0 flex h-48 w-full justify-end flex-wrap  bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none font-mono">
          <a href="/examples/read_after_write/explaination" >
            What's going on?
        </a></div>
      </div>
    </main>
  )
}
