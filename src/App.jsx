import { useState } from "react";


function App() {

  const [color, setColor] = useState("black")


  return (
    <>
    <div className="bg-red-500 w-full h-[100vh] flex justify-center items-end" style={{backgroundColor: color}}>
      <div className="bg-white h-fit w-fit mb-10 rounded-lg">
      <button onClick={()=>setColor("red")} className='bg-slate-400 p-2 m-3 rounded-lg' style={{ backgroundColor: 'red' }}>Red</button>
      <button onClick={()=>setColor("green")} className='bg-slate-400 p-2 m-3 rounded-lg' style={{ backgroundColor: 'green' }}>Green</button>
      <button onClick={()=>setColor("blue")} className='bg-slate-400 p-2 m-3 rounded-lg' style={{ backgroundColor: 'blue' }}>Blue</button>
      </div>
    </div>
    </>
  )
}

export default App
