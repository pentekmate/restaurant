import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [rotation, setRotation] = useState(0);
  const [counter, setCounter] = useState(0)

  const colors = ["blue", "green", "orange", "purple"]

  function rotatePlus() {
    const newRotation = rotation + 90;
    setRotation(newRotation)
    setCounter(counter + 1)
  }

  function rotateMinus() {
    const newRotation = rotation - 90;
    setRotation(newRotation)
    setCounter(counter - 1)

  }


  function changeBackground() {
    const target = document.getElementById("centerCircle")

    if (counter > 3 || counter < 0) {
      setCounter(0)
    }
    if (counter < 0) {
      setCounter(3)
    }

    target.style.backgroundColor = colors[counter]

  }


  useEffect(function () {
    changeBackground()
  }, [rotateMinus, rotatePlus])


  return (
    <>
      <div className='bg-slate-500 w-screen h-screen flex items-center '>
        <div className='w-1/2 h-full border border-red-900'></div>
        <div className='w-1/2 h-full border border-red-900 flex justify-center  items-center'>
          <div className='w-full h-full flex flex-col justify-center items-center relative gap-10'>

            <div style={{ transform: `rotate(${rotation}deg)` }} className='w-[500px] h-[500px] border-dashed  border-2 border-default-green rounded-full flex justify-center  relative items-center  small-circles-container'>

              <div className="absolute left-[224px] -top-6 bg-orange-600 flex justify-center small-circle">

              </div>
              <div className="absolute left-[224px] -bottom-6 bg-blue-500   flex justify-center small-circle">

              </div>

              <div className="absolute  -left-6  flex items-center bg-purple-500 small-circle">

              </div>
              <div className="absolute  -right-6 flex items-center bg-green-600 small-circle">

              </div>

              <div id="centerCircle" className='w-[300px] h-[300px] border border-blue-900 rounded-full'></div>


            </div>
            <div className='flex gap-4'>
              <button className='h-8 w-16 bg-slate-400' onClick={() => rotatePlus()}>+</button>
              <button className='h-8 w-16 bg-slate-400' onClick={() => rotateMinus()}>-</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
