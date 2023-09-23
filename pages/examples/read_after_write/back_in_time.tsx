import React, { useState, setState } from 'react'

export default function ReadAfterWriteConsistency() {
  const [count, setCount] = useState(1)

  const requestAnimation = [
      { transform: "translate(4.6em, 4.6em)" },
  ];

  const requestTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards"
  };

  const slowRequestTiming = {
    duration: 10000,
    iterations: 1,
    fill: "forwards"
  };

  const increaseOpacity = [
    {opacity: 1},
  ]

  const opacityTiming = {
    duration: 100,
    iterations: 1,
    fill: "forwards"
  };

  const moveAck = [
      { transform: "translate(4.8em, -4.6em)" },
  ];

  const moveRep1 = [
      { transform: "translate(4.6em, 4.2em)" },
  ];

  const moveRep2 = [
      { transform: "translate(4.6em, 8.6em)" },
  ];

  const moveRead = [
      { transform: "translate(5.6em, 4.6em)" },
  ];

  const moveReadResp = [
      { transform: "translate(5.6em, -4.6em)" },
  ];

  const moveRead2 = [
      { transform: "translate(5.6em, -9.2em)" },
  ];

  const moveRead2Resp = [
      { transform: "translate(5.6em, 9.2em)" },
  ];

  const moveRead3 = [
      { transform: "translate(5.6em, -4.6em)" },
  ];

  const moveRead3Resp = [
      { transform: "translate(5.6em, 4.6em)" },
  ];

  function moveRequest(){
    let request = document.querySelector(".write")
    let ack = document.querySelector(".ack")
    let rep1 = document.querySelector(".rep-1")
    let rep2 = document.querySelector(".rep-2")
    let read = document.querySelector(".read")
    let read2 = document.querySelector(".read2")
    let read3 = document.querySelector(".read3")
    let readResp = document.querySelector(".readResp")
    let read2Resp = document.querySelector(".read2Resp")
    let read3Resp = document.querySelector(".read3Resp")

    request.animate(requestAnimation, requestTiming);

    setTimeout(()=>{
      ack.animate(increaseOpacity,opacityTiming)
      rep1.animate(increaseOpacity,opacityTiming)
      rep2.animate(increaseOpacity,opacityTiming)
    }, 2000)

    setTimeout(()=>{
      setCount(2)
      ack.animate(moveAck,requestTiming)
      rep1.animate(moveRep1,requestTiming)
      rep2.animate(moveRep2,slowRequestTiming)
    }, 2100)

    setTimeout(()=>{
      read.animate(increaseOpacity,opacityTiming)
      read2.animate(increaseOpacity,opacityTiming)
    }, 4100)

    setTimeout(()=>{
      read.animate(moveRead,requestTiming)
      read2.animate(moveRead2,requestTiming)
    }, 4200)

    setTimeout(()=>{
      readResp.animate(increaseOpacity,opacityTiming)
      read2Resp.animate(increaseOpacity,opacityTiming)
    }, 6200)

    setTimeout(()=>{
      readResp.animate(moveReadResp,requestTiming)
      read2Resp.animate(moveRead2Resp,requestTiming)
    }, 6300)

    setTimeout(()=>{
      read3.animate(increaseOpacity,opacityTiming)
    }, 8300)

    setTimeout(()=>{
      read3.animate(moveRead3,requestTiming)
    }, 8400)

    setTimeout(()=>{
      read3Resp.animate(increaseOpacity,opacityTiming)
    }, 10400)

    setTimeout(()=>{
      read3Resp.animate(moveRead3Resp,requestTiming)
    }, 10500)
  }

  return (
    <main className="bg-black text-gray-300 flex min-h-screen flex-col items-center justify-around p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        Explaination:
        </div>
        <div>
          Count: {count}
        </div>
      </div>
      <div className="w-full grid grid-rows-5 grid-flow-col gap-2">
        <div className="w-full flex h-16 p-2 border-solid border-2 border-white">
          User 1
          <div className="write w-20 p-2 border-solid border-2 border-blue relative top left-16" onClick={moveRequest}>Write: 2</div>
          <div className="read w-20 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top left-72 opacity-0" >Read</div>
        </div>
        <div className="w-full flex h-16 p-2 border-solid border-2 border-white flex">
          Leader
          <div className="ack w-20 p-2 border-solid border-2 bg-red-800 border-red-300 relative top left-64 opacity-0" >Req Ack</div>
          <div className="rep-1 w-20 p-2 border-solid border-2 bg-blue-800 border-blue-200 relative top left-64 opacity-0" >Write: 2</div>
          <div className="rep-2 w-20 p-2 border-solid border-2 bg-blue-800 border-blue-200 relative top left-64 opacity-0" >Write: 2</div>
          <div className="w-1/12 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top opacity-0" >Spacer</div>
          <div className="readResp w-24 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top opacity-0" >Val = 2</div>
        </div>
        <div className="w-full flex h-16 p-2 border-solid border-2 border-white">
          Follower 1
          <div className="read w-1/4 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top opacity-0" >Spacer</div>
          <div className="read2Resp w-20 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top opacity-0" >Val = 2</div>
        </div>
        <div className="w-full flex h-16 p-2 border-solid border-2 border-white">
          Follower 2
          <div className="read w-1/2 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top opacity-0" >Spacer</div>
          <div className="read3Resp w-20 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top opacity-0" >Read: 1</div>
        </div>
        <div className="w-full flex h-16 p-2 border-solid border-2 border-white">
          User 2
        <div className="w-1/12 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top opacity-0" >Spacer</div>
        <div className="read2 w-20 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top left-72 opacity-0" >Read</div>
        <div className="w-1/12 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top opacity-0" >Spacer</div>
        <div className="read3 w-20 p-2 border-solid border-2 bg-yellow-800 border-yellow-300 border-blue relative top left-72 opacity-0" >Read</div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full justify-end flex-wrap  bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:bg-none font-mono">
      <a href="/examples/read_after_write/read_after_write_consistency" >
      Another issue: Going back in time...
      </a></div>
    </main>
  )}
