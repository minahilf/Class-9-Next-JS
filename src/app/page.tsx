// "use client"
// import { useEffect, useState } from "react";
// export default function Home() {
//   // syntax
//   const [counter, setCounter] = useState(0)

//   useEffect(()=>{
//     setCounter(counter+1)
//   },[])

//   function updateCounter() {
//     console.log(counter);
//     setCounter(counter + 1)
//   }
//   return (
//     <div  className="flex flex-col items-center justify-center min-h-screen bg-lime-200">
//       <p className="text-[45px] text-lime-800 font-bold mb-[5px]">{counter}</p>
//       <button onClick={() => updateCounter()} className="px-[10px] py-[10px] bg-lime-600 text-white rounded hover:bg-lime-900">TASBEEH</button>
//     </div>
//   );
// }

// SSR 

// export const dynamic = "force-dynamic"
//   export default async function Home() { 
//     const formattedDate = new Date().toLocaleString('en-US',{
//       month: 'long',
//       day : 'numeric',
//       year : 'numeric',
//       hour : 'numeric',
//       minute :'numeric',
//       second :"numeric",
//       hour12 :true,
//     })
//     return(
//       <div className="flex min-h-screen flex-col item-center p-34 text-lg gap-10" >
//          <h1 className="text-[30px]">Home Page </h1>
//          <h1 className="text-[30px]">Static Side Rendering</h1>
//          <strong>{formattedDate}</strong>
//       </div>
//     )
// }
import CoinMarket from "./coin-market/page"
export default function Home(){
  return(
    <div>
<CoinMarket/>
    </div>
  )
}