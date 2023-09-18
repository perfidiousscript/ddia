export default function LeaderFollower() {

const requestAnimation = [
    { transform: "translate(4.6em, 4.6em)" },
];

const requestTiming = {
  duration: 2000,
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


function moveRequest(){
  let request = document.querySelector(".request")
  let ack = document.querySelector(".ack")
  let rep1 = document.querySelector(".rep-1")
  let rep2 = document.querySelector(".rep-2")

  request.animate(requestAnimation, requestTiming);

  setTimeout(()=>{
    ack.animate(increaseOpacity,opacityTiming)
    rep1.animate(increaseOpacity,opacityTiming)
    rep2.animate(increaseOpacity,opacityTiming)
  }, 2000)

  setTimeout(()=>{
    ack.animate(moveAck,requestTiming)
    rep1.animate(moveRep1,requestTiming)
    rep2.animate(moveRep2,requestTiming)
  }, 2100)
}

  return(
    <main className="bg-black text-gray-300 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        Leader Follower flow
        </div>
      </div>
      <div className="w-full grid grid-rows-4 grid-flow-col gap-2">
        <div className="w-full h-16 p-2 border-solid border-2 border-white">
          User
          <div className="request w-20 h-14 p-2 border-solid border-2 border-blue relative top bottom-8 left-16" onClick={moveRequest}>Request</div>
        </div>
        <div className="w-full h-16 p-2 border-solid border-2 border-white flex">
          Leader
          <div className="ack w-20 h-14 p-2 border-solid border-2 border-blue relative top left-64 opacity-0" onClick={moveRequest}>Req Ack</div>
          <div className="rep-1 w-20 h-14 p-2 border-solid border-2 border-blue relative top left-64 opacity-0" onClick={moveRequest}>Rep 1</div>
          <div className="rep-2 w-20 h-14 p-2 border-solid border-2 border-blue relative top left-64 opacity-0" onClick={moveRequest}>Rep 2</div>
        </div>
        <div className="w-full h-16 p-2 border-solid border-2 border-white">
          Follower 1
        </div>
        <div className="w-full h-16 p-2 border-solid border-2 border-white">
          Follower 2
        </div>
      </div>
    </main>
  )
}
